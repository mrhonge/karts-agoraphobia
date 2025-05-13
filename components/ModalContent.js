import { useState, useEffect } from 'react';
import sectionMap from '../sections/sectionMap';

export function ModalContent({ sectionId }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    if (sectionMap[sectionId]) {
      setLoading(true);
      sectionMap[sectionId]()
        .then(module => {
          const SectionComponent = module.default;
          setContent(SectionComponent());
          setLoading(false);
        })
        .catch(err => {
          console.error("섹션 로딩 실패:", err);
          setError(true);
          setLoading(false);
        });
    } else {
      setContent({
        title: "내용 없음",
        content: <p>해당 섹션의 내용이 준비되지 않았습니다.</p>
      });
      setLoading(false);
    }
  }, [sectionId]);
  
  if (loading) return { 
    title: "로딩 중...", 
    content: <div className="loading-spinner">콘텐츠를 불러오는 중입니다...</div> 
  };
  
  if (error) return { 
    title: "오류 발생", 
    content: <div className="error-message">콘텐츠를 불러오는 중 오류가 발생했습니다.</div> 
  };
  
  return content;
}