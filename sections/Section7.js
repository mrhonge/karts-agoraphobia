import sectionsData from '../data/sections';
import React from 'react';
import AuthorSection from '../components/AuthorSection';
import HorizontalImagePair from '../components/HorizontalImagePair';
import ImageSlider from '../components/ImageSlider';


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
  
  // 의상 디자인 이미지 데이터
  const costumeImages = [
    '/design/costume/costume1.jpg',
    '/design/costume/costume2.jpg',
    '/design/costume/costume3.jpg',
    '/design/costume/costume4.jpg',
    '/design/costume/costume5.jpg',
    '/design/costume/costume6.jpg',
    '/design/costume/costume7.jpg',
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
      <p><strong>물리적으로는 가까워지지만 우리들의 광장이 점점 더 멀어지는 이유는 무엇일까요?</strong></p>
      <p>민주주의 여신상, 수많은 광장의 잔해, 그리고 이 시대 우리가 살고 있는 도시 까지 다루고 있는 이 공간을 통해 
        극에서 풀어내고자 하는 광장의 정서적, 개념적 메세지가 보관객들에게 보다 가깝게 다가가길 바랍니다.</p>
    </>
  );
  
  // 의상 디자이너의 콘텐츠
  const costumeDesignerContent = (
    <>
      <p>다양한 시대를 거쳐 펼쳐지는 이야기에서 인물 한 명마다 가지고 있는 캐릭터성에 집중하기보단 
        결국 끝에 전하고자 하는 결말을 이끌게 하는 오브제의 형태로 바라보고 디자인이 시작되었다.</p>
      <p>또한 복식과 복장의 개념적 차이를 두고 복식에 가까운 디자인 즉 옷의 꾸밈새로 가져가 각 인물을 
        오브제로 두고 옷과 장신구 형식으로 제작했다.</p>
      
      <ImageSlider 
        images={costumeImages} 
        title="의상 디자인 및 제작 과정" 
        autoSlideInterval={4000} 
      />
    </>
  );
  
  // 조명 디자이너의 콘텐츠
  const lightingDesignerContent = (
    <>
      <p>다양한 공간과 시간이 존재하는 극 속에서 조명이 어디까지 표현해야할지에 대한 기준을 잡는 게 가장 큰 고민이였다. 
        극이 완성되어갈수록 명확해지는 시대의 흐름을 조명이 자연스럽게 따라가며 변화하는 것을 가장 중점적 컨셉으로 잡았다.</p>
      <p><strong>1. 톤의 변주에 따른 시간의 층위</strong></p>
      <p>자연의 빛이 주를 이루던 고대는 웜톤으로,인공의 빛이 혼재된 미래는 쿨톤으로 표현하였다. 
        서로 다른 두 빛이 섞이는 과정을 통해, 변화하는 시간의 결을 담아내고자 했다.
      </p>
      <div className="reference-image-container">
          <img 
            src="/design/lighting/lighting-image1.png" 
            alt="고대부터 현대까지의 조명 변화" 
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
      </div>
      <p><strong>2. 광장의 조각들</strong></p>
      <p>'하나의 광장'이라는 이미지로 무대를 덮는 전체 조명과 흩어진 빛과 그림자들 
        역시 하나의 방향으로 모인다. 분산된 요소들을 하나의 장면으로 만들어내려 했다.</p>
      <HorizontalImagePair 
        leftImage="/design/lighting/lighting-image2.png" 
        rightImage="/design/lighting/lighting-image3.png"
        leftAlt="어두운 광장의 이미지" 
        rightAlt="밝은 광장의 이미지"
        height="250px"
      />
    </>
  );

  // 음악감독독의 콘텐츠
  const propsDesignerContent = (
    <>
      <p>아고라포비아를 하면서 우리가 일상에서 지나치는 수많은 광장에 대해 다시 감각할 수 있었습니다. 
        광장에선 어떤 소리가 나는지, 특히 시간 순서대로 이야기가 흐르는 아고라포비아에서는 과거의 광장과 현재의 광장, 
        그들의 차이점과 공통점에 대해 많이 생각해 보았습니다. 사람들이 많이 모이는 곳이니 항상 대화 소리와 발소리가 끊이지 않았을 겁니다. 
        하지만 마차 소리가 자동차 소리로 변하고 들리는 언어가 다양해지는 등 차이점도 많이 있겠죠. 코로나를 겪는 동안에는 
        항상 북적였던 광장도 조용한 시기를 보냈을 터입니다. 동일한 공간 속 다른 시간 그리고 그것이 만들어내는 제각각의 의미를 찾으려 노력했습니다.
      </p>
    </>
  );
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <style jsx global>{globalStyles}</style>
        
        <AuthorSection 
          title="무대 노트"
          authorInfo="무대 디자이너 이동현 (연극원 무대미술과 예술사 22)"
          sectionIndex={1}
        >
          {stageDesignerContent}
        </AuthorSection>

        <AuthorSection 
          title="조명 노트"
          authorInfo="조명 디자이너 박나경 (연극원 무대미술과 전문사 21)"
          sectionIndex={2}
        >
          {lightingDesignerContent}
        </AuthorSection>
        
        <AuthorSection 
          title="의상디자인 노트"
          authorInfo="의상 디자이너 신슬기 (연극원 무대미술과 예술사 22)"
          sectionIndex={3}
        >
          {costumeDesignerContent}
        </AuthorSection>

        <AuthorSection 
          title="음악 노트"
          authorInfo="음악감독 홍석영 (외부)"
          isLast={true}
          sectionIndex={4}
        >
          {propsDesignerContent}
        </AuthorSection>
      </div>
    )
  };
} 