import sectionsData from '../data/sections';
import ExpandableText from '../components/ExpandableText';
import React from 'react';

export default function Section5() {
  const section = sectionsData[5];
  
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
    .image-caption {
      text-align: center;
      font-size: 0.9rem;
      color: #666;
      margin-top: 8px;
    }
    .reference-image-container {
      margin: 20px 0;
    }
  `;
  
  const lastSectionStyle = {
    borderBottom: 'none',
    marginBottom: '0',
    paddingBottom: '0'
  };
  
  // 코러스 장 콘텐츠
  const chorusContent = (
    <>
      <p>고대 그리스 연극에서 코러스 전체를 대표해서 주인공이나 다른 등장인물과 직접 대화를 할 수 있는 인물이다.</p>
      <p>극의 진행 상황을 관객에게 설명하거나 정리하는 나레이터 역할도 겸한다. 노래와 춤을 통해 코러스를 조율하고 이야기의 흐름을 이끈다.
        때로는 관객 전체 또는 민중의 목소리를 대변하기도 한다.
      </p>
    </>
  );
  
  // 동물 재판 콘텐츠
  const animalTrialContent = (
    <>
      <p>중세에는 동물도 재판을 받았다. 동물들도 도덕적인 행위를 할 수 있으며 자신의 행동에 책임을 져야한다고 믿었기 때문이다. 
        돼지, 사마귀, 닭, 말 등 다양한 동물들이 재판의 대상이 되었으며, 그들을 변호하는 것은 늘 인간이었다.
      </p>
      <div className="reference-image-container">
        <img 
          src="/historical-reference/reference1.jpg" 
          alt="동물 재판 이미지" 
          className="reference-image"
          style={{ 
            width: '100%', 
            maxWidth: '500px', 
            margin: '15px auto', 
            display: 'block',
            borderRadius: '6px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
          }} 
        />
        <div className="image-caption">중세 시대의 동물 재판 이미지</div>
      </div>
    </>
  );
  
  // 체공녀 강주룡 콘텐츠
  const kangJuryongContent = (
    <>
      <p>강주룡(1901~1931)은 일제강점기 평양의 평원고무공장에서 일하던 여성 노동자이며 노동운동가이다. 
        1931년, 공장 측이 임금을 17% 삭감하자 강주룡은 동료들과 함께 단식 파업을 벌였고, 
        이후 을밀대 지붕에 올라가 "여성 해방, 노동 해방"을 외치며 고공농성을 진행했다. 
        이 투쟁은 한국 최초의 여성 고공농성으로 기록되며, 여성 노동자의 투쟁을 사회에 알리는 계기가 되었다. 
        그러나 파업은 성과 없이 끝났고, 강주룡은 병세가 악화되어 1931년 8월 13일 평양의 빈민굴에서 30세의 나이로 사망했다.
      </p>
      <div className="reference-image-container">
        <img 
          src="/historical-reference/reference2.jpg" 
          alt="체공녀 강주룡 고공농성 이미지" 
          className="reference-image"
          style={{ 
            width: '100%', 
            maxWidth: '500px', 
            margin: '15px auto', 
            display: 'block',
            borderRadius: '6px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
          }} 
        />
        <div className="image-caption">체공녀 강주룡 고공농성 이미지</div>
      </div>
    </>
  );
  
  // 최인훈의 광장 콘텐츠
  const inhunNovelContent = (
    <>
      <p>최인훈의 『광장』(1960)은 분단 현실 속에서 인간의 자유와 존재 의미를 깊이 성찰한 한국 현대문학의 대표작이다.</p>
      <p>주인공 이명준은 남한에서 공산주의 성향 때문에 투옥되었다가, 북한으로 밀항한다. 그러나 북한에서도 전체주의와 억압을 경험한 그는 실망한다. 
        북한에서 사랑하는 여자를 만나 아이까지 가졌지만, 전쟁의 폭격 속에서 여자와 아이 모두 죽게 된다.</p>
      <p>전쟁이 끝난 직후, 이명준은 남한도 북한도 아닌 제3의 공간인 중립국 인도행을 택한다. 그러나 결국, 그는 인도로 가는 배에서 바다로 투신하며 
        남과 북, 어디서도 자신이 설 '광장'을 찾지 못한 채 생을 마감한다.
      </p>
    </>
  );
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <style jsx global>{globalStyles}</style>
        
        <div style={sectionStyle} className="section-item">
          <div style={sectionTitleStyle}>1. 코러스 장</div>
          <div style={contentBodyStyle} className="content-body">
            {chorusContent}
          </div>
        </div>

        <div style={sectionStyle} className="section-item">
          <div style={sectionTitleStyle}>2. 동물 재판</div>
          <div style={contentBodyStyle} className="content-body">
            {animalTrialContent}
          </div>
        </div>

        <div style={sectionStyle} className="section-item">
          <div style={sectionTitleStyle}>3. 체공녀 강주룡</div>
          <div style={contentBodyStyle} className="content-body">
            {kangJuryongContent}
          </div>
        </div>

        <div style={{...sectionStyle, ...lastSectionStyle}} className="section-item">
          <div style={sectionTitleStyle}>4. 최인훈의 광장</div>
          <div style={contentBodyStyle} className="content-body">
            {inhunNovelContent}
          </div>
        </div>
      </div>
    )
  };
} 