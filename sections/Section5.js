import sectionsData from '../data/sections';
import ExpandableText from '../components/ExpandableText';
import React from 'react';

export default function Section5() {
  const section = sectionsData[5];
  
  // 섹션 5의 텍스트 내용을 JSX로 구성
  const sectionContent = (
    <>
      <p>아고라포비아 작품을 이해하는 데 도움이 되는 배경 지식과 해석의 관점을 제공합니다.
      본 작품은 단순히 공간 공포증이라는 의학적 증상을 다루는 것이 아니라, 광장이라는 공적 공간에서 
      벌어지는 다양한 권력관계와 배제의 메커니즘을 탐구합니다.</p>
      
      <p><strong>1. 작품의 시대적 배경</strong></p>
      <p>작품에서 다루는 여러 사건들은 특정 시대에 국한되지 않고 과거와 현재, 미래를 넘나듭니다.
      광장은 고대 그리스의 아고라에서부터 현대 사회의 시위 현장까지, 인류 역사에서 중요한 공적 담론의 
      장소였습니다. 이러한 역사적 맥락을 통해 작품은 지금 우리가 경험하는 광장의 의미를 재해석합니다.</p>
      
      <p><strong>2. 공간의 정치학</strong></p>
      <p>광장이라는 공간은 모두에게 열려있는 것처럼 보이지만, 사실상 특정 집단에게는 접근이 어렵거나 
      위험한 공간이 될 수 있습니다. 작품은 이러한 공간의 정치학을 통해 민주주의와 시민권, 소속감의 
      문제를 탐구합니다. 누가 광장에 들어올 수 있고, 누구의 목소리가 들리며, 누가 배제되는지에 대한 
      질문을 던집니다.</p>
      
      <p><strong>3. 작품 속 상징과 은유</strong></p>
      <p>레즈보스 섬은 난민 위기의 상징으로, 국경과 경계의 문제를 담고 있습니다.
      고인돌은 역사의 무게와 집단 기억의 상징으로 작용합니다.
      지하철은 현대 도시의 일상적 공간이지만, 작품에서는 '허가된' 사람들만의 공간으로 재해석됩니다.
      이러한 상징들은 광장의 다양한 측면을 드러내는 장치로 기능합니다.</p>
      
      <p><strong>4. 관객과의 관계</strong></p>
      <p>이 작품에서 관객은 단순한 관람자가 아닌, 광장의 일부로 초대됩니다. 
      객석 또한 하나의 광장이 되어, 관객들은 작품 속 사건들을 목격하고 참여하게 됩니다.
      이러한 참여적 관람 방식을 통해 광장에 대한 우리의 책임과 역할을 생각해볼 수 있습니다.</p>
    </>
  );
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <div className="author-info">작품 해설 / 학예사 김○○</div>
        <div className="content-body">
          <ExpandableText 
            text={sectionContent}
            maxHeight={150}
            showMoreText="더 보기"
          />
        </div>
      </div>
    )
  };
} 