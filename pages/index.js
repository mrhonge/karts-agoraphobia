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
    </>
  );
}
