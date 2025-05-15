import { useState } from 'react';
import dynamic from 'next/dynamic';
import ExpandableText from '../components/ExpandableText';
import Head from 'next/head';

// 모달 컴포넌트 동적 임포트
const Modal = dynamic(() => import('../components/Modal'), {
  ssr: false,
  loading: () => <div className="loading-spinner">로딩 중...</div>
});

export default function ExpandableModalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 긴 텍스트 예시
  const longText = `아고라포비아(Agoraphobia)는 광장 공포증으로도 알려진 불안 장애의 일종입니다. 
  이 장애를 가진 사람들은 빠져나오기 어렵거나 도움을 받기 어려운 장소나 상황에서 극도의 불안과 공포를 경험합니다.

  아고라포비아의 증상으로는 심장 두근거림, 숨가쁨, 어지러움, 발한, 떨림, 구역질 등이 있으며, 이러한 상황에서 공황 발작이 일어날 수 있다는 두려움이 수반됩니다.
  
  일반적으로 아고라포비아를 유발하는 상황으로는 대중교통 이용, 개방된 공간(시장, 주차장), 폐쇄된 공간(영화관, 극장), 줄을 서거나 군중 속에 있는 상황 등이 있습니다.
  
  치료 방법으로는 인지행동치료(CBT), 노출 치료, 약물 치료 등이 있으며, 많은 환자들이 적절한 치료를 통해 증상을 관리하고 일상생활로 복귀할 수 있습니다.
  
  아고라포비아는 단순한 공포가 아닌 심각한 불안 장애로, 전문가의 도움을 통해 치료가 가능합니다. 이 장애를 가진 사람들에 대한 이해와 지지가 중요합니다.`;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Head>
        <title>확장 가능한 텍스트가 있는 모달 예시</title>
      </Head>
      
      <h1>확장 가능한 텍스트가 있는 모달 예시</h1>
      
      <button onClick={openModal} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        모달 열기
      </button>
      
      {isModalOpen && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={closeModal}
          title="아고라포비아에 대한 정보"
        >
          <ExpandableText 
            text={longText} 
            maxHeight={150} 
            showMoreText="더 보기"
          />
        </Modal>
      )}
    </div>
  );
} 