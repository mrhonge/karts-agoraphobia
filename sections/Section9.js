// 기획의 글 (전 나가는 글)
import sectionsData from '../data/sections';
import ExpandableText from '../components/ExpandableText';
import React from 'react';

export default function Section9() {
  const section = sectionsData[9];
  
  // 섹션 9의 텍스트 내용을 JSX로 구성
  const sectionContent = (
    <>
      <p>
        
      </p>
    </>
  );
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <div className="author-info">기획 박용훈 (연극원 연극학과 예술경영전공 예술사 21)</div>
        <div className="content-body">
          <ExpandableText 
            text={sectionContent}
            maxHeight={180}
            showMoreText="더 보기"
          />
        </div>
      </div>
    )
  };
} 