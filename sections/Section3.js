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
      <p><strong>‘공간은 하나의 의심이다. 나는 끊임없이 그곳을 기록해야 하고 가리켜야 한다’<br />
        ‘공간은 부서지기 쉽다’</strong>
      </p>
      <p>두 문장 모두 리서치 과정 중 연출 님이 가져온 텍스트입니다. 저는 보통 텍스트를 제 마음대로 해체하고 해석해버리는데 이 두 문장도 마찬가지였습니다.</p>
      <p>정리하자면 내가 주시하지 않는 한 공간은 의미적으로 부서져 잊히거나 흐려지고, 내 안에서 그 공간은 텅 비어 버리게 됩니다.</p>
      <p>제가 처음 느꼈던 광장에 대한 공허함이 그제서야 이해됐습니다. 서울 광장에서 퀴어 퍼레이드가 취소되고 그 자리에 작은 텐트와 책이 채워졌을 때. 
        2025년의 광장은 도대체 어떤 의미가 있는지, 이런 게 광장이라면 광장은 사라진 게 아닌지 고민하던 저를 떠올려 봤습니다.</p>
      <p>그래서 생각합니다. 반대로 내가 주시한다면? 지켜본다면? 존재하고, 기록한다면? <br />그러면 이 무너진 광장을 다시 쌓아 올릴 수 있을까?</p>
      <p>의미가 텅 비어 버린 광장 안에 들어가서 너 이놈 잘 걸렸다, 하고 광장을 다시 쌓아 올리는 겁니다. 이야기로요. 극장은 광장이 될 수 없지만 광장의 이야기를 보여줄 수는 있으니까.</p>
      <p>우린 이 연극으로 광장을 쌓아 올리는 중입니다. 극장을 나서면 무대 위 광장은 부서지겠지만 더이상 비어 있지는 않을 겁니다.</p>
      <p>우리는 계속해서 광장을 말할 거니까요. 자꾸만 부서져도 다시 쌓아 올릴 겁니다. 보이지 않는 의미로 보이는 광장을 말할 겁니다. 그러니 수많은 시대의, 사람들의 광장을 마주하면서 함께 있다고 착각해 주셨으면 합니다. 
        동시에 의심해 주셨으면 합니다. 정말 우리가 광장에 함께 있는지를요.</p>
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
      <p>청동기 시대 한반도, 중세 시대 거리 공연, 그리고 현대의 경의선 광장을 쓴 홍경민입니다.</p>
      <p>‘광장’이란 뭘까? 그 의미를 정의하기에 앞서, 광장은 물리적으로 모일 수 있는 공간이라고 생각했습니다. 
        산 사람들이 모일 수 있는 공간이지만 동시에 죽은 사람들의 공간일 수도 있겠다는 생각에, 장례식의 풍경을 떠올리다 고인돌에 관한 이야기를 쓰게 되었습니다.</p>
      <p>어린 시절, 할아버지 댁에서 족보를 본 적이 있습니다. 그 안에 적힌 남자들의 이름을 보면서, 수많은 할머니들과 고모들과 언니들은 어디로 갔을까 궁금해하던 기억이 납니다. 
        이름이 남지 않았지만 존재했던 이들이 있었음을 처음 자각하게 된 건 그때였던 것 같습니다.</p>
      <p>산과 강의 이야기를 통해 이름이 남지 않은 이들에게 자리를 만들어 주고 싶었습니다. 역사는 승리한 자들의 기록이라고 하는데, 
        바꾸어 말하면 기록되는 것이 이기는 것이라 할 수 있겠지요. 무언가를 기억하는 것 자체가 힘을 가진다고 믿습니다. 그렇다면 무엇을 기억할지 결정하고, 
        끈질기게 기억하는 것은 투쟁의 시작일 수 있겠다는 생각을 했습니다.
      </p>
      <p>오늘날의 극장은 상당히 폐쇄적인 공간입니다. 티켓이 있어야만 들어올 수 있고, 정해진 시간에 약속된 장소에 가서 예매자 본인임을 입증해야 입장이 가능한 공간이죠. 
        중세는 극장의 오랜 역사 중 거의 유일하게, 고정된 형태의 물리적인 건물로서의 극장이 없었던 시기입니다. 
        누구나 들어갈 수 있고 나갈 수 있는, 극장이 잠시나마 ‘광장성’을 가졌던 시기입니다.</p>
      <p>서로 다른 입장을 가진 이들이, 갈등하는 이들이 한자리에 모이는 것에서 모든 게 시작된다고 생각합니다. 일단 만나서 대면하고, 같은 공간에 존재해 보는 것부터 시작입니다. 
        동성애 혐오자들이 실제로 동성애자를 만나서 대화해 보면, 그저 평범한 사람일 뿐 동성애자라고 해서 악마의 하수인이나 괴물이 아님을 느끼게 된다고 하죠.</p>
      <p>이렇게 서로 다른 우리를 한자리에 모일 수 있게 해 주는 것이 광장의 힘인 것 같습니다. 그리고 이 힘은 현대에도 유효하지만, 그 힘이 제대로 발휘되는 건 어쩌면 이제 시작이지 않은가, 하는 생각이 듭니다.</p>
      <p>그렇게 한동안 광장의 의미를 생각하다 보니, 생각하면 할수록 거대하고 막연하게만 느껴져 오히려 광장이 무엇인지 종잡을 수 없게 되었습니다. 그래서 잠시 현실로, 일상으로 눈을 돌렸습니다.
      </p>
      <p>‘광장’ 하면 광화문 광장 같은 곳만 생각했는데 지도에 무턱대고 검색해 보니 일상에도 광장이라 이름 붙은 곳이 꽤 많았습니다. 집 근처 광장에 앉아 최대한 많이 관찰해 보았습니다. 
        지나가는 사람들 모두 각자의 이야기와 사연을 가지고 있을 거라 생각하니 풍경이 조금 다르게 보였습니다. 다양한 삶이 만나고 교차하며 스쳐 지나가는 그 순간을 무어라 정의하지 않고 남겨두고 싶었습니다.</p>
      <p>어떤 이야기를 듣고 무슨 의미를 가져갈지는 관객 여러분 개개인에게 맡겨 두고 싶습니다.</p>
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
          <div style={authorInfoStyle}>작가 홍경민 (연극원 예술사 연출과 졸업)</div>
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