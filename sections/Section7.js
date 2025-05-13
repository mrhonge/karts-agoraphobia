import sectionsData from '../data/sections';

export default function Section7() {
  const section = sectionsData[7];
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <h3 className="content-title">마치며</h3>
        <div className="author-info">{section.author}</div>
        <div className="content-body">
          <p>아고라포비아 나가는 글 내용입니다.</p>
          <p>여기에 실제 내용을 추가해주세요. 본문 내용이 여기에 들어갑니다.</p>
          <p>공연을 마친 소감, 관객에게 전하는 메시지, 앞으로의 계획 등을 담을 수 있습니다.</p>
        </div>
      </div>
    )
  };
} 