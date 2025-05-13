import sectionsData from '../data/sections';

export default function Section4() {
  const section = sectionsData[4];
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <h3 className="content-title">극작의 관점에서</h3>
        <div className="author-info">{section.author}</div>
        <div className="content-body">
          <p>아고라포비아 드라마터그의 글 내용입니다.</p>
          <p>여기에 실제 내용을 추가해주세요. 본문 내용이 여기에 들어갑니다.</p>
          <p>극의 구성, 주제 분석, 문학적 의미 등을 설명할 수 있습니다.</p>
        </div>
      </div>
    )
  };
} 