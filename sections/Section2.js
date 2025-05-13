import sectionsData from '../data/sections';

export default function Section2() {
  const section = sectionsData[2];
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <h3 className="content-title">아고라포비아란?</h3>
        <div className="content-body">
          <p>아고라포비아 작품 소개 내용입니다.</p>
          <p>여기에 실제 내용을 추가해주세요. 본문 내용이 여기에 들어갑니다.</p>
          <p>작품의 주제, 배경, 특징 등을 상세히 설명할 수 있습니다.</p>
        </div>
      </div>
    )
  };
} 