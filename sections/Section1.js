import sectionsData from '../data/sections';
import ExpandableText from '../components/ExpandableText';
import React from 'react';

export default function Section1() {
  const section = sectionsData[1];
  
  // 섹션 1의 텍스트 내용을 JSX로 구성
  const sectionContent = (
    <>
      <p>중학생 때 친구와 자주 명동에 갔습니다. 
          둘이 합쳐 겨우 만오천 원이 안 되는 돈과 폴더폰만 든 채였습니다.
          그때는 사람이 많은 광장 한가운데 서있어도 테러나 사고나 감염 따위를 
          생각치 않을 수 있었습니다. </p>
      <p>어리고 촌스러운 소녀였던 우리는 어느 가게에도 쉽사리 들어가지 못하고, 
          그저 수많은 사람들이 만들어내는 파도에 이리저리 휩쓸려다니며 좁은 골목부터 
          대로변까지 개방된 공간들을 고루 누볐습니다. 높고 거대하고 또 왠지 모를 위압감이 
          드는 건물들 사이에서, 인종도 성별도 나이도 너무나 다른 사람들을 바라보며 나는 
          내가 한없이 작게 느껴졌고 그 감각이 오래오래 남을 만큼 인상적이었습니다. 
          내가 틈입할 수 없는 공간과 온전히 누릴 수 있는 공간을 가르는 일. 
          이런 분리의 경험이 저에게는 본격적인 <strong>도시 걷기-</strong>의 첫 기억입니다.</p>
      <p>어른이 되면 점유할 수 있는 공간이 늘어날 것이기에 하루 빨리 성인이 되고싶다고 생각했습니다. 
          하지만 지금 나는 퀴어 아이덴티티를 가지고선 광화문 광장에서 축제를 벌일 수 없고, 
          장애인이 된다면 지하철 승강장을 점유하기 힘들 뿐더러, 난민으로서는 그 어떤 장소에도 소속될 수 없습니다. 
          정체성의 가능성이 늘어날수록 나의 공간은 넓어지는 것이 아니라 점점 좁아집니다.</p>
      <p>우리는 이런 상황에 그저 절망해야할까요? 가장 우리다운 방식으로 이 비좁은 공간을 넓혀가자고 마음먹었습니다. 
          너무 퀴어해서 외면받던 이야기를 무대 위에 끌어올리는 방식으로, 무력함에 잠식되지 않은 채 웃고 즐기며 존재감을 뽐내는 방식으로.</p>   
      <p>수많은 도시공간 속에서 이번에는 광장에 주목하려 합니다. 
          수천년을 뛰어넘는 광장의 역사 속에서, 그 안에 포함될 수 있던 사랆은 누구고 광장에서마저 밀려난 사람은 누구인지, 
          지금 우리 사회에서 열린 공간의 의미는 무엇인지 질문하고 함께 생각하고 싶습니다.</p> 
      <p>공연을 준비하는 동안 자주 조지 버나드 쇼의 문장을 떠올렸습니다.</p>
      <blockquote className="quote">
        "My way of joking is to tell the truth. It's the funniest joke in the world."<br />
        제가 농담하는 방식은 진실을 말하는 거예요. 그게 세상에서 가장 웃긴 농담이거든요.
        <cite>- 조지 버나드 쇼 (George Bernard Shaw)</cite>
      </blockquote>
      <p>공연을 준비하는 동안에 퀴어문화축제는 또다시 불허되었고, 계엄이 벌어졌고, 대통령이 탄핵되었고, 수많은 차별과 배제에 희생된 사람들이 있었습니다. 
          지난한 시간을 버틸 수 있도록 함께 농담을 나누어준, 사랑하는 팀원들에게 감사합니다.</p>
    </>
  );
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <h3 className="content-title">광장의 초입에 서서서</h3>
        <div className="author-info">박지원 (연극원 연출과 예술사 21)</div>
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