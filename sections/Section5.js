import sectionsData from '../data/sections';

export default function Section5() {
  const section = sectionsData[5];
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <h3 className="content-title">작품 제작 과정</h3>
        <div className="author-info">{section.author}</div>
        <div className="content-body">
          <p>아고라포비아 창작과정기록 내용입니다.</p>
          <p>여기에 실제 내용을 추가해주세요. 본문 내용이 여기에 들어갑니다.</p>
          <p>기획부터 제작까지의 과정, 어려웠던 점, 극복 방법 등을 기술할 수 있습니다.</p>
        </div>
      </div>
    )
  };
} 