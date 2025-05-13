// 함께한 사람들
export default function Section10() {
  return {
    title: "함께한 사람들",
    content: (
      <div className="section-content">
        <h2>작품을 만든 모든 창작자들</h2>
        
        <div className="credits">
          <div className="credit-section">
            <h3>연출팀</h3>
            <ul>
              <li><span className="role">연출</span> <span className="name">홍길동</span></li>
              <li><span className="role">조연출</span> <span className="name">김철수</span></li>
              <li><span className="role">드라마터그</span> <span className="name">이영희</span></li>
            </ul>
          </div>
          
          <div className="credit-section">
            <h3>디자인팀</h3>
            <ul>
              <li><span className="role">무대 디자인</span> <span className="name">박지성</span></li>
              <li><span className="role">조명 디자인</span> <span className="name">손흥민</span></li>
              <li><span className="role">의상 디자인</span> <span className="name">황희찬</span></li>
              <li><span className="role">음향 디자인</span> <span className="name">김민재</span></li>
            </ul>
          </div>
          
          <div className="credit-section">
            <h3>제작팀</h3>
            <ul>
              <li><span className="role">기획</span> <span className="name">정우영</span></li>
              <li><span className="role">제작 감독</span> <span className="name">이강인</span></li>
              <li><span className="role">홍보</span> <span className="name">조현우</span></li>
            </ul>
          </div>
          
          <div className="credit-section">
            <h3>특별 감사</h3>
            <p>
              한국예술종합학교 연극원<br />
              ○○○ 재단<br />
              △△△ 문화센터<br />
              그리고 본 공연을 위해 도움을 주신 모든 분들께 깊은 감사를 드립니다.
            </p>
          </div>
        </div>
      </div>
    )
  };
} 