import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Modal from "../components/Modal";
import { ModalContent } from "../components/ModalContent";

export default function Home() {
  // 모달 상태 관리
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);

  // 모달 열기 함수
  const openModal = (sectionId) => {
    setCurrentSection(sectionId);
    setModalOpen(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setModalOpen(false);
  };

  // 현재 섹션의 모달 콘텐츠 가져오기
  const { title, content } = currentSection 
    ? ModalContent({ sectionId: currentSection })
    : { title: "", content: null };

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
            <img 
              src="/images/landing.jpg" 
              alt="아고라포비아 랜딩 이미지" 
              className="section-image landing-image"
            />
          </div>

          {/* 모달 섹션 */}
          <div className="modal-section">
            {/* 섹션 1: 들어가는 글 */}
            <div>
              <img 
                src="/images/section1.png" 
                alt="들어가는 글" 
                className="section-image section1-image"
                onClick={() => openModal(1)}
                style={{ cursor: 'pointer' }}
              />
            </div>

            {/* 섹션 2: 작품 소개 */}
            <div>
              <img 
                src="/images/section2.jpg" 
                alt="작품 소개" 
                className="section-image section2-image"
                onClick={() => openModal(2)}
                style={{ cursor: 'pointer' }}
              />
            </div>

            {/* 섹션 3: 작가의 글 */}
            <div>
              <img 
                src="/images/section3.jpg" 
                alt="작가의 글" 
                className="section-image section3-image"
                onClick={() => openModal(3)}
                style={{ cursor: 'pointer' }}
              />
            </div>

            {/* 섹션 4: 드라마터그의 글 */}
            <div>
              <img 
                src="/images/section4.jpg" 
                alt="드라마터그의 글" 
                className="section-image section4-image"
                onClick={() => openModal(4)}
                style={{ cursor: 'pointer' }}
              />
            </div>

            {/* 섹션 5: 창작과정기록 */}
            <div>
              <img 
                src="/images/section5.jpg" 
                alt="창작과정기록" 
                className="section-image section5-image"
                onClick={() => openModal(5)}
                style={{ cursor: 'pointer' }}
              />
            </div>

            {/* 섹션 6: 배우프로필 */}
            <div>
              <img 
                src="/images/section6.jpg" 
                alt="배우프로필" 
                className="section-image section6-image"
              />
            </div>

            {/* 섹션 7: 나가는 글 */}
            <div>
              <img 
                src="/images/section7.jpg" 
                alt="나가는 글" 
                className="section-image section7-image"
                onClick={() => openModal(7)}
                style={{ cursor: 'pointer' }}
              />
            </div>

            {/* 섹션 8: 함께한 사람들 */}
            <div>
              <img 
                src="/images/section8.jpg" 
                alt="함께한 사람들" 
                className="section-image section8-image"
              />
            </div>
          </div>

          {/* 푸터 */}
          <footer className="footer">
            <img 
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
      <Modal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        title={title}
      >
        {content}
      </Modal>
    </>
  );
}
