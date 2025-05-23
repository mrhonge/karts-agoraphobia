import Head from "next/head";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { ModalContent, getModalTitle } from "../components/ModalContent";
import { OptimizedImage } from '../components/OptimizedImage';
import sectionsData from '../data/sections';
import { useModal } from '../contexts/ModalContext';

// 모달 컴포넌트 동적 임포트 - 클라이언트 사이드에서만 로드
const Modal = dynamic(() => import('../components/Modal'), {
  ssr: false,
  loading: () => <div className="loading-spinner">로딩 중...</div>
});

export default function Home() {
  const { modalOpen, currentSection, openModal, closeModal } = useModal();
  const [isLoading, setIsLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState(3); // 처음에 3개 섹션만 표시
  const [footprints, setFootprints] = useState([]);
  const [showFootprints, setShowFootprints] = useState(false);

  // 페이지 로딩 완료 시 로딩 상태 해제
  useEffect(() => {
    setIsLoading(false);

    // 스크롤 이벤트 리스너 추가
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        // 스크롤이 하단 근처에 도달하면 더 많은 섹션 로드
        setVisibleSections(prev => Math.min(prev + 3, 10));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let timeoutId;
    let intervalId;

    function spawnFootprints() {
      // 화면 크기
      const w = window.innerWidth;
      const h = window.innerHeight;
      // 시작점 (여백 고려)
      const margin = 100;
      const startX = Math.random() * (w - margin * 2) + margin;
      const startY = Math.random() * (h - margin * 2) + margin;
      // 방향 (위, 아래, 대각선 4방향)
      const angles = [
        Math.PI * 1.5, // 위
        Math.PI * 0.5, // 아래
        Math.PI * 1.25, // 왼쪽 위 대각선
        Math.PI * 1.75, // 오른쪽 위 대각선
        Math.PI * 0.25, // 오른쪽 아래 대각선
        Math.PI * 0.75, // 왼쪽 아래 대각선
      ];
      const angle = angles[Math.floor(Math.random() * angles.length)];
      // 발자국 개수/간격
      const count = 6;
      const step = 55 + Math.random() * 15; // px
      const stride = 18; // 좌우로 벌어지는 정도(px)
      const animDuration = 2.0;
      const animDelay = 0.25;
      const totalDuration = (count - 1) * animDelay + animDuration;
      const newFootprints = Array.from({ length: count }).map((_, i) => {
        const dx = Math.cos(angle) * step * i;
        const dy = Math.sin(angle) * step * i;
        // 이동 방향에 수직인 각도
        const perpAngle = angle + Math.PI / 2;
        const offset = (i % 2 === 0 ? -stride : stride);
        const px = Math.cos(perpAngle) * offset;
        const py = Math.sin(perpAngle) * offset;
        return {
          x: startX + dx + px,
          y: startY + dy + py,
          left: i % 2 === 0,
          idx: i,
          angle: (angle * 180) / Math.PI,
        };
      });
      setFootprints(newFootprints);
      setShowFootprints(true);
      // 발자국 전체가 사라지는 시간 (마지막 발자국 애니메이션이 끝난 후)
      timeoutId = setTimeout(() => setShowFootprints(false), totalDuration * 1000);
    }

    // 최초 1초 후, 이후 4~7초 간격 반복
    const start = setTimeout(() => {
      spawnFootprints();
      intervalId = setInterval(spawnFootprints, 4000 + Math.random() * 3000);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(start);
      clearInterval(intervalId);
    };
  }, []);

  // 현재 섹션의 제목 가져오기
  const title = currentSection ? 
    sectionsData[currentSection]?.title || getModalTitle({ sectionId: currentSection }) : 
    "";

  return (
    <>
      <Head>
        <title>연극 아고라포비아 | 프로그램북</title>
        <meta name="description" content="아고라포비아 공연 프로그램북" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container">
        <main>
          {/* 발자국 효과 - 이미지보다 먼저, zIndex 0 */}
          <div style={{position:'absolute',left:0,top:0,width:'100vw',height:'100vh',pointerEvents:'none',zIndex:0}}>
            {showFootprints && footprints.map((fp, i) => (
              <img
                key={i}
                src={fp.left ? "/images/footprint-right-2.png" : "/images/footprint-left-2.png"}
                alt="footprint"
                style={{
                  position: 'absolute',
                  left: fp.x,
                  top: fp.y,
                  width: 44,
                  height: 60,
                  opacity: 0,
                  transform: `rotate(${fp.angle}deg)`,
                  animation: `footprint-fadeinout 2.0s ${i * 0.25}s forwards`,
                }}
              />
            ))}
          </div>
          {/* 랜딩 페이지 */}
          <div className="landing-page">
            <OptimizedImage 
              src="/images/landing.png" 
              alt="아고라포비아 랜딩 이미지" 
              className="section-image landing-image"
              priority={true}
            />
          </div>

          {/* 모달 섹션 */}
          <div className="modal-section">
            {/* 섹션 표시 (섹션 9 포함) */}
            {Object.keys(sectionsData)
              .filter(key => parseInt(key) <= visibleSections)
              .map(key => {
                const section = sectionsData[key];
                return (
                  <div key={section.id}>
                    <OptimizedImage 
                      src={section.imageUrl}
                      alt={section.title} 
                      className={`section-image section${section.id}-image`}
                      onClick={() => openModal(section.id)}
                      priority={section.id <= 2} // 첫 2개 섹션은 우선순위
                    />
                  </div>
                );
              })
            }
          </div>

          {/* 푸터 */}
          <footer className="footer">
            <OptimizedImage 
              src="/images/karts-logo.jpg" 
              alt="한국예술종합학교 로고" 
              className="logo"
            />
            <p className="footer-text">
              COPYRIGHT © 2025 &lt;아고라포비아&gt;. All rights reserved.<br />
              본 웹페이지의 모든 콘텐츠(텍스트, 이미지, 영상 등)는 저작권의 보호를<br />
              받으며, 무단 복제 및 배포를 금합니다.
            </p>
          </footer>
        </main>
      </div>

      {/* 모달 */}
      {!isLoading && (
        <Modal 
          isOpen={modalOpen} 
          onClose={closeModal} 
          title={title}
        >
          {currentSection && <ModalContent sectionId={currentSection} />}
        </Modal>
      )}

      {/* 스타일 */}
      <style jsx global>{`
        @keyframes footprint-fadeinout {
          0% { opacity: 0; }
          15% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </>
  );
}
