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
      공연이 시작되면 극장은 어느새 광장이 됩니다. 여러 개의 광장이 됩니다. 
      이야기는 우리가 알던 광장을 무너뜨립니다. 
      제도와 체제, 권력이 만든 거대한 광장을 허물고 그 잔해 위에 소외된 이들, 밀려난 이들을 위한 광장을 새로 세웁니다.<br /> 
      처음에는 “이딴 게 광장”인가 싶을 수도 있습니다. 
      그래도 “이런 것도 광장”이라는 너그러운 마음으로 여정을 따르다 보면, 어느새 우리가 알던 광장은 광장이 아니게 될지도 모릅니다.
      </p>
      <p>
      저는 이 공연을 보며 종종 별자리를 관찰하는 듯한 기분이 들곤 합니다. 언뜻 보면 연관성 없는 별들을 하나씩 엮어가다 보면 찰나의 순간, 찬란한 별자리가 완성됩니다. 
      이와 같이 각각의 장면은 분절되어 보이지만 결국 하나의 이야기를 전합니다. 광장이 필요하다는 것 말입니다. <br />
      물론 시선을 거두면 다시 별자리는 희미해지듯이 이 작품이 전하는 이야기가 선명하게 와닿지는 않을 수 있습니다. 그럼에도 그 찬란한 무언가를 본 기억은 우리 안에 고이 간직됩니다. 저는 이 이야기가 그렇게 남았으면 하는 바람입니다. <br />
      우리의 극장은 수많은 광장을 재현하지만, 결코 광장이 될 수 없습니다. 결국 우리에게 남는 건 물음입니다. “그렇다면 무엇이 광장인가?”
      </p>
      <p>
      수천 년의 시간을 가로지르며 무대 위에 펼쳐지는 광장들, 그 사이에서 여러분은 무엇을 보셨나요? 
      어떤 생각을 하셨나요? 여러분은 광장을 점유하고 있나요, 혹은 밀려났나요?
      이 이야기가 여러분만의 정답을 찾는 계기가 되길 바랍니다.
      </p>
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