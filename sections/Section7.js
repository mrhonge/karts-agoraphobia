import sectionsData from '../data/sections';
import React from 'react';
import AuthorSection from '../components/AuthorSection';

export default function Section7() {
  const section = sectionsData[7];
  
  // 이미지 갤러리 데이터
  const designImages = [
    '/design/design-image1.jpg',
    '/design/design-image2.jpg',
    '/design/design-image3.jpg',
    '/design/design-image4.jpg',
    '/design/design-image5.jpg',
    '/design/design-image6.jpg',
  ];
  
  const globalStyles = `
    .content-body p {
      margin-bottom: 20px;
    }
    .content-body p:last-child {
      margin-bottom: 0;
    }
  `;
  
  // 무대 디자이너의 콘텐츠
  const stageDesignerContent = (
    <>
      <p><strong>"공간을 통해 광장을 표현하다"</strong></p>
      <p>물리적으로는 가까워지지만 우리들의 광장이 점점 더 멀어지는 이유는 무엇일까요?</p>
      <p>이번 작업에서 가장 중요하게 생각한 것은 '광장'이라는 개념을 어떻게 시각적으로 표현할 것인가였습니다. 
         민주주의 여신상, 수많은 광장의 잔해, 그리고 이 시대 우리가 살고 있는 도시까지 다루고 있는 이 공간을 통해 
         극에서 풀어내고자 하는 광장의 정서적, 개념적 메시지가 관객들에게 보다 가깝게 다가가길 바랍니다.</p>
      <p>무대 중앙의 반투명한 벽체는 내부와 외부의 경계, 현실과 상상의 경계를 의미합니다. 
         이는 가깝지만 멀게 느껴지는 현대인의 관계성을 상징적으로 보여주는 장치이기도 합니다.</p>
      <p>좁고 제한된 공간에서 넓은 공간으로 확장되는 구조를 통해 주인공의 내면 변화를 표현했으며, 
         이는 관객들이 함께 감정적 여정을 경험할 수 있도록 설계되었습니다.</p>
    </>
  );
  
  // 의상 디자이너의 콘텐츠
  const costumeDesignerContent = (
    <>
      <p><strong>"옷을 통해 보여주는 내면의 여정"</strong></p>
      <p>의상 디자인은 등장인물의 심리 상태와 사회적 위치를 반영합니다. 
         특히 주인공은 무채색 계열의 옷에서 점차 색이 들어가는 의상으로 변화하며 내면의 성장을 표현합니다.</p>
      <p>이번 작품에서 의상은 단순한 옷이 아닌, 캐릭터의 정체성과 변화를 보여주는 시각적 언어입니다. 
         현대 사회에서 우리가 입는 옷은 우리의 정체성을 표현하는 동시에 때로는 진짜 자아를 감추는 역할도 합니다.</p>
      <p>관객들이 의상의 변화를 통해 캐릭터의 내면 변화를 더 깊이 이해하고, 
         광장 안에서 자신의 목소리를 찾아가는 여정을 함께 느낄 수 있길 바랍니다.</p>
      <p>각 등장인물의 의상 색상과 스타일은 그들이 광장에서 어떤 위치를 차지하는지, 
         어떤 역할을 하는지를 상징적으로 보여줍니다. 이는 말로 표현되지 않는 
         캐릭터 간의 관계성과 극의 주제를 더욱 풍부하게 전달하는 요소가 되길 바랍니다.</p>
    </>
  );
  
  // 조명 디자이너의 콘텐츠
  const lightingDesignerContent = (
    <>
      <p><strong>"보이지 않는 감정을 빛으로"</strong></p>
      <p>조명은 공간의 분위기와 감정 상태를 표현하는 중요한 역할을 합니다. 불안한 장면에서는 짧은 깜빡임과 
         불규칙한 패턴의 조명을 사용하고, 해방감을 느끼는 장면에서는 따뜻하고 밝은 조명을 활용했습니다.</p>
      <p>특히 주인공의 공황 발작 장면에서는 조명의 색상과 강도를 통해 심리적 압박감을 표현했습니다. 
         이는 관객들이 주인공의 내면 상태를 시각적으로 경험할 수 있도록 하기 위함입니다.</p>
      <p>공간과 인물을 비추는 빛의 각도와 강도는 장면의 감정적 무게감을 결정합니다. 
         우리는 빛을 통해 관객들이 극의 감정선을 더 생생하게 느낄 수 있도록 섬세하게 설계했습니다.</p>
      <p>조명을 통해 무대 위 현실과 상상의 경계를 시각적으로 구분하고, 
         캐릭터의 내면 여정이 관객들에게 직관적으로 전달되기를 바랍니다.</p>
    </>
  );

  // 소품 디자이너의 콘텐츠
  const propsDesignerContent = (
    <>
      <p><strong>"물건에 담긴 이야기"</strong></p>
      <p>소품은 단순한 물건이 아닌, 캐릭터의 삶과 이야기를 담고 있는 매개체입니다. 
         특히 이번 작품에서는 광장이라는 개념을 표현하기 위한 상징적인 오브제들이 중요했습니다.</p>
      <p>관객들에게 익숙한 일상적 물건들이 무대 위에서 새로운 맥락을 갖게 될 때, 
         그것은 친숙함과 낯섦 사이의 감정을 불러일으키며 관객들의 공감을 이끌어냅니다.</p>
      <p>소품 하나하나의 색상, 질감, 크기를 통해 광장 안에서 개인의 존재감과 
         집단 속 정체성의 문제를 시각적으로 표현하고자 했습니다.</p>
      <p>이 작품의 소품들이 관객들에게 단순한 물건 이상의 의미로 다가가,
         우리가 전하고자 하는 이야기의 깊이를 더해주길 바랍니다.</p>
    </>
  );
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <style jsx global>{globalStyles}</style>
        
        <AuthorSection 
          authorInfo="무대 디자이너 이동현 (연극원 무대미술과 예술사 22)"
          sectionIndex={1}
        >
          {stageDesignerContent}
        </AuthorSection>

        <AuthorSection 
          authorInfo="조명 디자이너 박나경 (연극원 무대미술과 전문사 21)"
          sectionIndex={2}
        >
          {lightingDesignerContent}
        </AuthorSection>
        
        <AuthorSection 
          authorInfo="의상 디자이너 신슬기 (연극원 무대미술과 예술사 22)"
          sectionIndex={3}
        >
          {costumeDesignerContent}
        </AuthorSection>

        <AuthorSection 
          authorInfo="소품 디자이너 이지현 (연극원 무대미술과 예술사 22)"
          isLast={true}
          sectionIndex={4}
          showSlider={true}
          sliderImages={designImages}
          sliderTitle="디자인 과정 갤러리"
        >
          {propsDesignerContent}
        </AuthorSection>
      </div>
    )
  };
} 