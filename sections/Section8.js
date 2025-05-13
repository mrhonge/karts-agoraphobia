// 출연진 프로필
export default function Section8() {
  return {
    title: "출연진 프로필",
    content: (
      <div className="section-content">
        <h2>작품에 참여한 배우들</h2>
        
        <div className="actor-profiles">
          <div className="actor-profile">
            <h3>김○○</h3>
            <p className="actor-role">캐릭터 역</p>
            <p className="actor-bio">
              한국예술종합학교 연극원 졸업. 주요 출연작으로는 '○○○', '△△△' 등이 있다.
              독특한 캐릭터 해석과 깊이 있는 감정 표현으로 주목받고 있는 배우.
            </p>
          </div>
          
          <div className="actor-profile">
            <h3>이○○</h3>
            <p className="actor-role">캐릭터 역</p>
            <p className="actor-bio">
              한국예술종합학교 연극원 재학 중. '□□□', '◇◇◇' 등의 작품에 참여했으며,
              신체적 표현력과 공간 활용 능력이 뛰어난 배우.
            </p>
          </div>
          
          <div className="actor-profile">
            <h3>박○○</h3>
            <p className="actor-role">캐릭터 역</p>
            <p className="actor-bio">
              한국예술종합학교 연극원 졸업. '◆◆◆', '★★★' 등 다양한 작품에서 
              다채로운 캐릭터를 소화해냈으며, 특유의 감성적인 연기로 관객들의 마음을 사로잡는 배우.
            </p>
          </div>
        </div>
      </div>
    )
  };
} 