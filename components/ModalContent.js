import { useState, useEffect, memo } from 'react';
import sectionMap from '../sections/sectionMap';

// 메모이제이션으로 불필요한 렌더링 방지
export const ModalContent = memo(function ModalContent({ sectionId }) {
  const [contentData, setContentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    let isMounted = true;
    
    const loadContent = async () => {
      if (sectionMap[sectionId]) {
        try {
          setLoading(true);
          // 로딩 상태 표시를 위한 최소 지연
          const delayPromise = new Promise(resolve => setTimeout(resolve, 100));
          
          // 섹션 컴포넌트 로드
          const modulePromise = sectionMap[sectionId]();
          
          // 두 프로미스를 병렬로 실행
          const [_, module] = await Promise.all([delayPromise, modulePromise]);
          
          if (isMounted) {
            const SectionComponent = module.default;
            setContentData(SectionComponent());
            setLoading(false);
          }
        } catch (err) {
          console.error("섹션 로딩 실패:", err);
          if (isMounted) {
            setError(true);
            setLoading(false);
          }
        }
      } else {
        if (isMounted) {
          setContentData({
            title: "내용 없음",
            content: <p>해당 섹션의 내용이 준비되지 않았습니다.</p>
          });
          setLoading(false);
        }
      }
    };
    
    loadContent();
    
    // 클린업 함수
    return () => {
      isMounted = false;
    };
  }, [sectionId]);
  
  if (loading) return (
    <div className="loading-spinner">콘텐츠를 불러오는 중입니다...</div>
  );
  
  if (error) return (
    <div className="error-message">콘텐츠를 불러오는 중 오류가 발생했습니다.</div>
  );
  
  return contentData?.content || null;
});

export function getModalTitle({ sectionId }) {
  // 섹션 ID에 따른 기본 타이틀 반환
  if (!sectionId) return "";
  
  if (sectionMap[sectionId]) {
    return sectionMap[sectionId].title || "섹션 내용";
  }
  
  return "내용 없음";
}