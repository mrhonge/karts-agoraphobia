import sectionsData from '../data/sections';
import ExpandableText from '../components/ExpandableText';
import React from 'react';

export default function Section3() {
  const section = sectionsData[3];
  
  const authorSectionStyle = {
    marginBottom: '30px',
    paddingBottom: '30px',
    borderBottom: '1px solid #755E54'
  };
  
  const authorInfoStyle = {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '20px',
    fontStyle: 'italic',
    textAlign: 'right',
    paddingBottom: '5px'
  };
  
  const contentBodyStyle = {
    lineHeight: '1.7',
    fontSize: '1rem'
  };

  const globalStyles = `
    .content-body p {
      margin-bottom: 20px;
    }
    .content-body p:last-child {
      margin-bottom: 0;
    }
  `;
  
  const lastAuthorSectionStyle = {
    borderBottom: 'none',
    marginBottom: '0',
    paddingBottom: '0'
  };
  
  // 김한인의 글 콘텐츠
  const kimHaninContent = (
    <>
      <p>두 시대의 광장을 썼어요. 근대의 조선은행 광장과 현대의 광장.<br />
        광장광장광장장. 광장을 생각하는 동안, 머릿속에 '시선'이라는 단어가 강하게 남더라고요.<br />
        광장은 응시하는 곳이면서 동시에 응시당하는 공간이 아닐까?<br />
        시선은 위에서 아래로, 아래에서 위로, 수직으로, 수평으로 흘러가면서 때론 끌어당기고, 외면하고.<br />
        그 시선이 어디에서 시작되고 어디로 흘러가는지를 따라가면서 장면을 썼어요.<br />
        나름대로 광장에 대한 정의를 내려보더라도 참 아리송하네요.<br />
        아마 광장광장광장장 최면에 걸린 듯 합니다...<br />
        그래도 한 가지 분명한 건, 광장은 끊임없이 '누구를 보고 있는가'를 묻는 공간이라고 생각합니다.
      </p>
    </>
  );
  
  // 오성경의 글 콘텐츠
  const ohSungkyungContent = (
    <>
      <p>창작과정에서 창작진들은 따로 또 함께 광장을 거닐고 그곳에 떠도는 이야기를 수집했습니다. 
        떠도는 이야기. 누군가는 외침으로, 누군가는 점유로, 누군가는 결집으로. 
        광장 위에서 몸과 행위로 드러나는 것들을 포착하고 이야기로 확장시키는 일은 자연스레 시공간을 넘나드는 일이 되었습니다. 
        광장의 누군가를 보고 나를 떠올리고, 또 내가 사랑하는 누군가를 떠올리고, 그 누군가가 감명 깊게 읽은 책의 저자를 떠올리고, 
        그 저자가 거닐었을 광장을 다시금 떠올리며 그 사람과 내 눈 앞의 사람 사이의 공명을 느낍니다. 
        사는 시간과 공간이 달라 만나지 못한 존재들이 우리의 광장 안에서 어떻게 만나 관계 맺을 수 있을지, 
        혹은 어떤 지점은 쭉 모르는 상태로 계속 두어야 할지 상상하는 과정이 관객들에게도 전이되었으면 합니다. 
        함께 상상하는 광장이 되었으면 합니다.
      </p>
      <p>저는 작가들의 글을 읽으며 가미되면 재밌겠다고 생각한 장면을 썼습니다. 
        근대의 전차 장면과 현대의 스타벅스 장면입니다. 실제 그대로를 옮겨놓고, 그 안에 허구의 이스터에그를 심어놓고 싶었습니다. 
        가벼운 마음으로, 포착되는 작은 조각들을 기억 속에 가져가시길 바라는 (자체 인터미션) 시간이길 바랍니다. 그리고 잊으셔도 좋습니다. 
        분명 문득 언젠가 대사 한 줄 움직임 한 흐름이 번뜩 떠오르는 날이 있으리라 믿습니다. 기억은 늘 그런 식으로 부유하니까요. 
        그리고 그 기억의 성질도 광장 속의 우리의 성질과 닮아있어, 어떤 방식으로든 우리는 오늘 경험한 광장을 내 몸 어느 구석에 보관하게 되는 격입니다.
      </p>
      <p>사실 이 모든 건 제 바람이고, 어떻게 받아들이거나 잊으셔도 좋습니다.</p>
    </>
  );

  // 이진의 글 콘텐츠
  const leeJinContent = (
    <>
      <p>이진의 글</p>
      <p>여기에 남겨 주세요.</p>
    </>
  );
  
  // 임현서의 글 콘텐츠
  const limHyunseoContent = (
    <>
      <p>우린 서로의 세계를 완전히 알 수 없을 것이다. 그럼에도 나는 당신에게 최대한 가까이 가고 싶다.</p>
      <p>작업을 하면서 광장에 나온, 나오지 못한, 나올 수 없었던, 그곳에서 밀려난 모두의 삶을 떠올려보았다. 
        모르는 것에 더 가까워지기 위해 픽션과 논픽션을 얼기설기 엮고 또 그사이에 내 세계를 섞으며 어떻게 하면 더 알게 될 수 있을까, 고민했다. 
        여전히 알지 못하는 것들이 있고, 이해할 수 없는 것들이 있다. 그러나 나는 여전히 최대한 가까이 가고 싶다. 
      </p>
      <p>
      우리가 '주'의 말처럼 모두 섬사람들이라면, 우리는 서로와 완전히 겹칠 수 없지만 함께할 수 있고 또 서로의 섬을 떠올려 볼 수 있을 테다. 
      그걸 떠올리면 난 광장에서 옷깃을 스치는 것만큼 우리가 가까워지는 게 느껴져서 어쩐지 위로가 된다. 
      할 수 있는 한에서 함께해요. 나는 이곳에 뿌리를 내릴게요, 뿌리뿌리 마 뿌리! 🌈🗽🌳
      </p>
    </>
  );

  // 홍경민의 글 콘텐츠
  const HongKyeongminContent = (
    <>
      <p>홍경민의 글</p>
      <p>여기에 남겨 주세요.</p>
    </>
  );

  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <style jsx global>{globalStyles}</style>
        <div style={authorSectionStyle}>
          <div style={authorInfoStyle}>작가 김한인 (연극원 극작과 예술사 21)</div>
          <div style={contentBodyStyle} className="content-body">
            <ExpandableText 
              text={kimHaninContent}
              maxHeight={150}
              showMoreText="더 보기"
            />
          </div>
        </div>

        <div style={authorSectionStyle}>
          <div style={authorInfoStyle}>작가 오성경 (외부)</div>
          <div style={contentBodyStyle} className="content-body">
            <ExpandableText 
              text={ohSungkyungContent}
              maxHeight={150}
              showMoreText="더 보기"
            />
          </div>
        </div>

        <div style={authorSectionStyle}>
          <div style={authorInfoStyle}>작가 이진 (연극원 예술사 극작과 21)</div>
          <div style={contentBodyStyle} className="content-body">
            <ExpandableText 
              text={leeJinContent}
              maxHeight={150}
              showMoreText="더 보기"
            />
          </div>
        </div>

        <div style={authorSectionStyle}>
          <div style={authorInfoStyle}>작가 임현서 (연극원 예술사 극작과 21)</div>
          <div style={contentBodyStyle} className="content-body">
            <ExpandableText 
              text={limHyunseoContent}
              maxHeight={150}
              showMoreText="더 보기"
            />
          </div>
        </div>

        <div style={{...authorSectionStyle, ...lastAuthorSectionStyle}}>
          <div style={authorInfoStyle}>작가 홍경민 (연극원 예술사 극작과 졸업업)</div>
          <div style={contentBodyStyle} className="content-body">
            <ExpandableText 
              text={HongKyeongminContent}
              maxHeight={150}
              showMoreText="더 보기"
            />
          </div>
        </div>
      </div>
    )
  };
} 