import Head from "next/head";
import { useEffect } from "react";
import Modal from "../components/Modal";
import { ModalContent } from "../components/ModalContent";
import { OptimizedImage } from '../components/OptimizedImage';
import sectionsData from '../data/sections';
import { useModal } from '../contexts/ModalContext';

export default function Home() {
  const { modalOpen, currentSection, openModal, closeModal } = useModal();

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
            <OptimizedImage 
              src="/images/landing.jpg" 
              alt="아고라포비아 랜딩 이미지" 
              className="section-image landing-image"
            />
          </div>

          {/* 모달 섹션 */}
          <div className="modal-section">
            {/* 섹션 1: 들어가는 글 */}
            <div>
              <OptimizedImage 
                src={sectionsData[1].imageUrl}
                alt={sectionsData[1].title} 
                className="section-image section1-image"
                onClick={() => openModal(1)}
              />
            </div>

            {/* 섹션 2: 작품 소개 */}
            <div>
              <OptimizedImage 
                src={sectionsData[2].imageUrl}
                alt={sectionsData[2].title} 
                className="section-image section2-image"
                onClick={() => openModal(2)}
              />
            </div>

            {/* 섹션 3: 작가의 글 */}
            <div>
              <OptimizedImage 
                src={sectionsData[3].imageUrl}
                alt={sectionsData[3].title} 
                className="section-image section3-image"
                onClick={() => openModal(3)}
              />
            </div>

            {/* 섹션 4: 드라마터그의 글 */}
            <div>
              <OptimizedImage 
                src={sectionsData[4].imageUrl}
                alt={sectionsData[4].title} 
                className="section-image section4-image"
                onClick={() => openModal(4)}
              />
            </div>

            {/* 섹션 5: 창작과정기록 */}
            <div>
              <OptimizedImage 
                src={sectionsData[5].imageUrl}
                alt={sectionsData[5].title} 
                className="section-image section5-image"
                onClick={() => openModal(5)}
              />
            </div>

            {/* 섹션 6: 배우프로필 */}
            <div>
              <OptimizedImage 
                src={sectionsData[6].imageUrl}
                alt={sectionsData[6].title} 
                className="section-image section6-image"
              />
            </div>

            {/* 섹션 7: 나가는 글 */}
            <div>
              <OptimizedImage 
                src={sectionsData[7].imageUrl}
                alt={sectionsData[7].title} 
                className="section-image section7-image"
                onClick={() => openModal(7)}
              />
            </div>

            {/* 섹션 8: 함께한 사람들 */}
            <div>
              <OptimizedImage 
                src={sectionsData[8].imageUrl}
                alt={sectionsData[8].title} 
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
