import { useState, useEffect } from 'react';
import sectionMap from '../sections/sectionMap';

export function ModalContent({ sectionId }) {
  const [contentData, setContentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    if (sectionMap[sectionId]) {
      setLoading(true);
      sectionMap[sectionId]()
        .then(module => {
          const SectionComponent = module.default;
          setContentData(SectionComponent());
          setLoading(false);
        })
        .catch(err => {
          console.error("섹션 로딩 실패:", err);
          setError(true);
          setLoading(false);
        });
    } else {
      setContentData({
        title: "내용 없음",
        content: <p>해당 섹션의 내용이 준비되지 않았습니다.</p>
      });
      setLoading(false);
    }
  }, [sectionId]);
  
  if (loading) return (
    <div className="loading-spinner">콘텐츠를 불러오는 중입니다...</div>
  );
  
  if (error) return (
    <div className="error-message">콘텐츠를 불러오는 중 오류가 발생했습니다.</div>
  );
  
  return contentData?.content || null;
}

export function getModalTitle({ sectionId }) {
  // 섹션 ID에 따른 기본 타이틀 반환
  if (!sectionId) return "";
  
  if (sectionMap[sectionId]) {
    return sectionMap[sectionId].title || "섹션 내용";
  }
  
  return "내용 없음";
}