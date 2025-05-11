export function ModalContent({ sectionId }) {
  // 여기에 각 섹션별 콘텐츠를 정의합니다
  const contents = {
    1: {
      title: "들어가는 글",
      content: (
        <div>
          <p>아고라포비아 프로그램북의 들어가는 글 내용입니다.</p>
          <p>여기에 실제 내용을 추가해주세요.</p>
        </div>
      )
    },
    2: {
      title: "작품 소개",
      content: (
        <div>
          <p>아고라포비아 작품 소개 내용입니다.</p>
          <p>여기에 실제 내용을 추가해주세요.</p>
        </div>
      )
    },
    3: {
      title: "작가의 글",
      content: (
        <div>
          <p>아고라포비아 작가의 글 내용입니다.</p>
          <p>여기에 실제 내용을 추가해주세요.</p>
        </div>
      )
    },
    4: {
      title: "드라마터그의 글",
      content: (
        <div>
          <p>아고라포비아 드라마터그의 글 내용입니다.</p>
          <p>여기에 실제 내용을 추가해주세요.</p>
        </div>
      )
    },
    5: {
      title: "창작과정기록",
      content: (
        <div>
          <p>아고라포비아 창작과정기록 내용입니다.</p>
          <p>여기에 실제 내용을 추가해주세요.</p>
        </div>
      )
    },
    7: {
      title: "나가는 글",
      content: (
        <div>
          <p>아고라포비아 나가는 글 내용입니다.</p>
          <p>여기에 실제 내용을 추가해주세요.</p>
        </div>
      )
    }
  };

  return contents[sectionId] || { 
    title: "내용 없음", 
    content: <p>해당 섹션의 내용이 준비되지 않았습니다.</p> 
  };
}