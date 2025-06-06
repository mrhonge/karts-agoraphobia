import sectionsData from '../data/sections';
import ExpandableText from '../components/ExpandableText';
import React from 'react';

export default function Section4() {
  const section = sectionsData[4];
  
  // 섹션 4의 텍스트 내용을 JSX로 구성
  const sectionContent = (
    <>
      <p>아고라포비아, 즉 광장 공포증은 넓은 광장에 있을 때 갑자기 매우 불안해지는 증상에서 유래한 불안장애의 일종이다. 
        현재는 그 의미가 확장되어 사람이 많은 공공장소에서 불안감을 느끼는 증상을 표현하는 말로 쓰인다. 
        그런데 우리가 이야기하고자 하는 아고라포비아는 조금 더 확장된 상상력을 요한다. 
        '공포증'이라는 단어에 갇히면 이 이야기와 조금은 거리감을 느끼게 될 것이다. 
        우리는 광장 속에 은폐되고 내재되고 예언되는 공포를 이야기하고자 한다. 
        나에게 아직 오지 않은 누군가의 과거, 내가 이미 겪은 누군가의 미래를 뒤섞어 광대한 가능세계를 담아내려한다. 
        아이러니하게도 그렇게 광활한 이야기를 담으면 그다지 공포스럽지 않은 광장이 그려진다. 
        현실의 광장. 우리가 아무렇지 않게 지나가고 모이고 관망하는 곳 말이다. 그 곳은 누군가가 끊임없이 배제되고 쫓겨난 곳이다. 
        누군가가 밀려나는 모습을 보며 우리는 그가 완전히 타인이라고 착각해왔다. 
        그 착각과 외면의 역사는 긴 호흡으로 우리를 고립시켰고, 텅 비어버린 사회로 우리를 내몰았다. 
        그 안에서 우리는 공포를 느끼거나 공포에 익숙해져간다.</p>
      <p>현재는 난민들의 섬이 되어버린 레즈보스 섬, 권력자의 두루뭉술한 죽음만을 간직한 고인돌, 변주되며 반복되는 연극과 시위, 
        불합리를 가리지 못하는 법정과 '허가된 시민'만을 받아들이는 지하철, 혼자서 또는 함께 외치며 삶을 찾던 수많은 민주시민. 
        아주 긴 시간동안 인류가 겪어온 일들이, 당신이 언젠가 경험했거나 경험할 수 있는 통증과 같은 것이라는 생각까지 연결되기를 바란다. 
        그로부터 생겨난 공포가 지금도 광장에서 배제되고 있는 사람들에 공감하는 연료로 활용되기를 바란다. 
        여전히 광장은 무표정으로 존재하고 있다. 또는 용도에 맞게 쪼개져 수많은 공간으로 제도화되고 있다. 
        그렇게 사회 전반으로 퍼진 광장 속에서 서로의 고통을 발견하고 들여다보고 기꺼이 함께한다면, 
        우리가 오래 지녀온 염증과도 아주 느린 속도로 이별할 수 있지 않을까. 그렇게 채워지는 역사도 있기를 바란다.</p>
    </>
  );
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <div className="author-info">드라마터그 오성경 (외부)</div>
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