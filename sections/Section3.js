import sectionsData from '../data/sections';

export default function Section3() {
  const section = sectionsData[3];
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <h3 className="content-title">작품을 쓰며</h3>
        <div className="author-info">{section.author}</div>
        <div className="content-body">
          <p>아고라포비아 작가의 글 내용입니다.</p>
          <p>여기에 실제 내용을 추가해주세요. 본문 내용이 여기에 들어갑니다.</p>
          <p>작가로서의 고민, 작품에 담긴 메시지 등을 서술할 수 있습니다.</p>
        </div>
      </div>
    )
  };
} 