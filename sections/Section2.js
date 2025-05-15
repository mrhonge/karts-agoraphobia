import sectionsData from '../data/sections';
import ExpandableText from '../components/ExpandableText';
import React from 'react';

export default function Section2() {
  const section = sectionsData[2];
  
  const sectionStyle = {
    marginBottom: '30px',
    paddingBottom: '30px',
    borderBottom: '1px solid #755E54'
  };
  
  const sectionTitleStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#333'
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
  
  const lastSectionStyle = {
    borderBottom: 'none',
    marginBottom: '0',
    paddingBottom: '0'
  };
  
  // 시놉시스 콘텐츠
  const synopsisContent = (
    <>
      <p><strong>“이 이야기는 아주아주 오래된 이야기. 어쩌면 아주 가까운 이야기일지도.”</strong></p>
      <p>여기, 여섯 명의 배우와 한 명의 코러스가 광장에 대한 이야기를 합니다.</p>
      <p>이들은 수십 개의 장면에서 60여 명의 인물과 몇몇 동식물을 연기하며 광장성을 이야기합니다.</p>
      <p>무대는 레스보스 섬과 청동기 한반도가 되고, 고대 로마와 경성이 되었다가 홍콩과 을지로 스타벅스, 마포구 경의선 숲길이 되기도 합니다.</p>
      <p>그렇게 수천 년의 도시 역사 속 광장을 점유한 이들- 그리고 밀려난 이들을 무대 위로 불러옵니다.</p>
      <p>우리의 광장은 무엇을 허락하고, 무엇을 밀어내는 걸까요.</p>
      <p>시대와 장소, 현실과 허구의 경계를 넘나드는 본격 뉴-다큐멘타리 연극</p>
      <p><strong>“이딴 게 광장? 싶어도 집중하세요. 정신을 놓는 순간 그 시대에 그냥 두고 갑니다.”</strong></p>
    </>
  );
  
  // 형식소개 콘텐츠
  const formatContent = (
    <>
      <p>뉴다큐멘터리 연극은 기억과 경험, 현존하는 인물, 실제의 장소 등 새로운 범주의 다큐멘트를 활용하는 연극이다. </p>
      <p>뉴다큐멘터리 연극은 기존의 다큐멘터리 연극이 극적인 합일이나 통일, 단결, 일치를 추구하는 정치 사회적 목적성을 지향했던 것과는 
        달리 일상과 밀접하게 연관된 미시서사에 주목하고, 집단적 일반화에 저항하며 중심을 해체시키고 결론을 유보하고자 한다.</p>
      <p>또한 현실을 그대로 드러내기보다는 새로운 리얼리티를 드러내는 것에 가까우며 올드 미디어와 뉴 미디어를 결합하는 몽타주를 통해 혼재된 상호매체적인 
        층위를 보여줄 뿐 아니라, 다양한 매체들이 융합되면서 새로운 연극적 층위를 창출한다.</p>
      <p>뉴 다큐멘터리를 통해 창출된 ‘정치적인 것’은 메시지를 전달하는 것이 아니다. 이 ‘정치적인 것’은 오히려 자신의 이유를 직접적으로 드러내지 않고자 
        단편화된 이미지들 사이의 간극으로 미끄러지고, 동시에 이 이미지들 사이의 관계를 통해 새로운 어떤 것을 창조하는 예술적인 어떤 것이다.</p>
    </>
  );
  
  // 창작방식 콘텐츠
  const creationContent = (
    <>
      <p>공동창작 연극은 세계의 다양성에 대한 시선과 인식을 확장시킨다는 점에서 가치를 가진다. 공동창작은 한 작가에 한 작가에 국한된 세계 인식과 실천의 경험을 넘어 
        '공통'이라는 사회적 또는 각 개인의 다양한 경험을 희곡쓰기 전반에 배치시키며 새로운 시너지를 발생시킨다. 이로써 보편성을 획득하고 관극하는 이로부터 쉽게 공감을 얻어낸다. </p>
      <p>그렇다고 공동창작에서 한 개인 전문작가의 역할이 배제되는 것은 아니다. 공동창작 과정에서의 작품의 의도와 구성, 주제 포착에 따른 리서치, 극 전개와 형상화, 다듬기 등 작가의 역할은 
        작품 안팎으로 오히려 그 역할 비중이 더 높아졌다고도 볼 수 있다.</p>
    </>
  );
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <style jsx global>{globalStyles}</style>
        
        <div style={sectionStyle} className="section-item">
          <div style={sectionTitleStyle}>시놉시스</div>
          <div style={contentBodyStyle} className="content-body">
            <ExpandableText 
              text={synopsisContent}
              maxHeight={150}
              showMoreText="더 보기"
            />
          </div>
        </div>

        <div style={sectionStyle} className="section-item">
          <div style={sectionTitleStyle}>형식 소개 - 뉴다큐멘터리 연극</div>
          <div style={contentBodyStyle} className="content-body">
            <ExpandableText 
              text={formatContent}
              maxHeight={150}
              showMoreText="더 보기"
            />
          </div>
        </div>

        <div style={{...sectionStyle, ...lastSectionStyle}} className="section-item">
          <div style={sectionTitleStyle}>창작방식 - 공동창작</div>
          <div style={contentBodyStyle} className="content-body">
            <ExpandableText 
              text={creationContent}
              maxHeight={150}
              showMoreText="더 보기"
            />
          </div>
        </div>
      </div>
    )
  };
} 