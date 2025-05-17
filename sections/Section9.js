// 기획의 글 (전 나가는 글)
import sectionsData from '../data/sections';
import ExpandableText from '../components/ExpandableText';
import React from 'react';

export default function Section9() {
  const section = sectionsData[9];
  
  // 섹션 9의 텍스트 내용을 JSX로 구성
  const sectionContent = (
    <>
      <p>
      공연이 시작되면 극장은 어느새 광장이 됩니다. 그리고 동시에 우리가 알던 광장을 무너뜨립니다. 
      제도와 체제, 권력이 만든 거대한 광장을 허물고 그 잔해 위에 소외된 이들, 밀려난 이들을 위한 광장을 새로 세웁니다.</p>
      <p>처음에는 "이딴 게 광장"인가 싶을 수도 있습니다. 그래도 "이런 것도 광장"이라는 너그러운 마음으로 여정을 따르다 보면, 
        어느새 우리가 알던 광장은 광장이 아니게 됩니다.
      </p>
      <p>이 이야기는 하나의 서사로 수렴되지 않습니다. 수천년의 시간을 넘나들며 수많은 광장이 등장하고, 
        각각의 광장은 서로 아무 관련이 없어 보이기도 합니다. 그래서 문득 별자리를 떠올렸습니다. 흩어진 별들을 하나씩 잇다 보면, 어느 모습을 드러내는 별자리를 말입니다.</p>
      <p>물론 공연이 끝나고 불이 켜지면 그 별자리는 언제 존재했냐는 듯이 흩어져 사라질 겁니다. 하지만 공연을 보며 보고 느낀 그 찰나의 감각은 오래도록 우리 안에 남을 거라 믿습니다. 
        그렇게 당연한 것은 당연하지 않은 것이 되고, 감각하지 못한 것은 새로이 감각되기 시작합니다. </p>
      <p>집으로 돌아가는 길, 잠시 주변을 둘러보시기 바랍니다. 무엇이 보이고 무엇이 보이지 않나요? 오늘날 우리에게 필요한 광장은 무슨 모습일까요? 이 질문에 대한 여러분의 답을 찾아가시길 바라는 마음입니다.</p>
    </>
  );
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <div className="author-info">기획 박용훈 (연극원 연극학과 예술경영전공 예술사 21)</div>
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