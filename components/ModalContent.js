import styles from './ModalContent.module.css';

export function ModalContent({ sectionId }) {
  // 여기에 각 섹션별 콘텐츠를 정의합니다
  const contents = {
    1: {
      title: "들어가는 글",
      author: "아고라포비아 제작진",
      content: (
        <div className={styles.contentWrapper}>
          <h3 className={styles.contentTitle}>프로그램북을 시작하며</h3>
          <div className={styles.authorInfo}>작성자: 아고라포비아 제작진</div>
          <div className={styles.contentBody}>
            <p>아고라포비아 프로그램북의 들어가는 글 내용입니다.</p>
            <p>여기에 실제 내용을 추가해주세요. 본문 내용이 여기에 들어갑니다.</p>
            <p>다양한 단락으로 구성할 수 있으며, 필요에 따라 내용을 추가하면 됩니다.</p>
          </div>
        </div>
      )
    },
    2: {
      title: "작품 소개",
      author: "연출팀",
      content: (
        <div className={styles.contentWrapper}>
          <h3 className={styles.contentTitle}>아고라포비아란?</h3>
          <div className={styles.authorInfo}>작성자: 연출팀</div>
          <div className={styles.contentBody}>
            <p>아고라포비아 작품 소개 내용입니다.</p>
            <p>여기에 실제 내용을 추가해주세요. 본문 내용이 여기에 들어갑니다.</p>
            <p>작품의 주제, 배경, 특징 등을 상세히 설명할 수 있습니다.</p>
          </div>
        </div>
      )
    },
    3: {
      title: "작가의 글",
      author: "홍길동",
      content: (
        <div className={styles.contentWrapper}>
          <h3 className={styles.contentTitle}>작품을 쓰며</h3>
          <div className={styles.authorInfo}>작성자: 홍길동</div>
          <div className={styles.contentBody}>
            <p>아고라포비아 작가의 글 내용입니다.</p>
            <p>여기에 실제 내용을 추가해주세요. 본문 내용이 여기에 들어갑니다.</p>
            <p>작가로서의 고민, 작품에 담긴 메시지 등을 서술할 수 있습니다.</p>
          </div>
        </div>
      )
    },
    4: {
      title: "드라마터그의 글",
      author: "이몽룡",
      content: (
        <div className={styles.contentWrapper}>
          <h3 className={styles.contentTitle}>극작의 관점에서</h3>
          <div className={styles.authorInfo}>작성자: 이몽룡</div>
          <div className={styles.contentBody}>
            <p>아고라포비아 드라마터그의 글 내용입니다.</p>
            <p>여기에 실제 내용을 추가해주세요. 본문 내용이 여기에 들어갑니다.</p>
            <p>극의 구성, 주제 분석, 문학적 의미 등을 설명할 수 있습니다.</p>
          </div>
        </div>
      )
    },
    5: {
      title: "창작과정기록",
      author: "제작팀",
      content: (
        <div className={styles.contentWrapper}>
          <h3 className={styles.contentTitle}>작품 제작 과정</h3>
          <div className={styles.authorInfo}>작성자: 제작팀</div>
          <div className={styles.contentBody}>
            <p>아고라포비아 창작과정기록 내용입니다.</p>
            <p>여기에 실제 내용을 추가해주세요. 본문 내용이 여기에 들어갑니다.</p>
            <p>기획부터 제작까지의 과정, 어려웠던 점, 극복 방법 등을 기술할 수 있습니다.</p>
          </div>
        </div>
      )
    },
    7: {
      title: "나가는 글",
      author: "아고라포비아 전체 팀",
      content: (
        <div className={styles.contentWrapper}>
          <h3 className={styles.contentTitle}>마치며</h3>
          <div className={styles.authorInfo}>작성자: 아고라포비아 전체 팀</div>
          <div className={styles.contentBody}>
            <p>아고라포비아 나가는 글 내용입니다.</p>
            <p>여기에 실제 내용을 추가해주세요. 본문 내용이 여기에 들어갑니다.</p>
            <p>공연을 마친 소감, 관객에게 전하는 메시지, 앞으로의 계획 등을 담을 수 있습니다.</p>
          </div>
        </div>
      )
    }
  };

  return contents[sectionId] || { 
    title: "내용 없음", 
    content: <p>해당 섹션의 내용이 준비되지 않았습니다.</p> 
  };
}