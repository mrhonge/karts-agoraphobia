import sectionsData from '../data/sections';
import ExpandableText from '../components/ExpandableText';
import React from 'react';

export default function Section2() {
  const section = sectionsData[2];
  
  // 섹션 2의 텍스트 내용을 JSX로 구성
  const sectionContent = (
    <>
      <p>아고라포비아 작품 소개 내용입니다.</p>
      <p>여기에 실제 내용을 추가해주세요. 본문 내용이 여기에 들어갑니다.</p>
      <p>작품의 주제, 배경, 특징 등을 상세히 설명할 수 있습니다.</p>
    </>
  );
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <h3 className="content-title">아고라포비아란?</h3>
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