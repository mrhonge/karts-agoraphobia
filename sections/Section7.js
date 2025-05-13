import sectionsData from '../data/sections';
import { useState, useEffect, useId } from 'react';
import ExpandableText from '../components/ExpandableText';
import React from 'react';

export default function Section7() {
  const section = sectionsData[7];
  
  const AuthorSection = ({ authorInfo, children, isLast, sectionIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const uniqueId = useId(); // 각 섹션에 고유 ID 부여
    
    // 이미지 갤러리 데이터
    const images = [
      '/design/design-image1.jpg',
      '/design/design-image2.jpg',
      '/design/design-image3.jpg',
      '/design/design-image4.jpg',
      '/design/design-image5.jpg',
      '/design/design-image6.jpg',
    ];
    
    // 다음 슬라이드로 이동
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    
    // 이전 슬라이드로 이동
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    
    // 자동 슬라이드 기능
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 5000);
      
      return () => clearInterval(interval);
    }, [images.length]);
    
    const authorSectionStyle = {
      marginBottom: '30px',
      paddingBottom: '30px',
      borderBottom: isLast ? 'none' : '1px solid #755E54'
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
    
    const sliderContainer = {
      marginTop: '50px',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '8px',
      height: '400px',
      display: !isLast ? 'none' : 'block'
    };
    
    const sliderTitle = {
      textAlign: 'center',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#755E54',
      marginBottom: '20px'
    };
    
    const slideStyle = {
      width: '100%',
      height: '100%',
      position: 'relative'
    };
    
    const imageStyle = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    };
    
    const arrowStyle = {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
      cursor: 'pointer',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      color: '#333',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px'
    };
    
    const indicatorsContainer = {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      justifyContent: 'center',
      zIndex: 10
    };
    
    const indicatorStyle = (index) => ({
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: currentIndex === index ? '#755E54' : 'rgba(255, 255, 255, 0.6)',
      margin: '0 5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    });
    
    const leftArrow = {
      ...arrowStyle,
      left: '15px'
    };
    
    const rightArrow = {
      ...arrowStyle,
      right: '15px'
    };
    
    const imageCounter = {
      position: 'absolute',
      top: '15px',
      right: '15px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '15px',
      fontSize: '12px',
      zIndex: 10
    };
    
    return (
      <div style={authorSectionStyle} id={`author-section-${sectionIndex}`}>
        <div style={authorInfoStyle}>{authorInfo}</div>
        <div style={contentBodyStyle} className="content-body">
          <ExpandableText 
            text={children}
            maxHeight={150}
            showMoreText="더 보기"
          />
        </div>
        
        {isLast && (
          <div style={sliderContainer}>
            <div style={sliderTitle}>디자인 과정 갤러리</div>
            <div style={slideStyle}>
              <img
                src={images[currentIndex]}
                alt={`디자인 과정 이미지 ${currentIndex + 1}`}
                style={imageStyle}
              />
              <div style={imageCounter}>
                {currentIndex + 1} / {images.length}
              </div>
              <button style={leftArrow} onClick={prevSlide}>
                &#10094;
              </button>
              <button style={rightArrow} onClick={nextSlide}>
                &#10095;
              </button>
              <div style={indicatorsContainer}>
                {images.map((_, index) => (
                  <span
                    key={index}
                    style={indicatorStyle(index)}
                    onClick={() => setCurrentIndex(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
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
  
  // 조명/음향 디자이너의 콘텐츠
  const lightSoundDesignerContent = (
    <>
      <p><strong>"보이지 않는 감정을 빛과 소리로"</strong></p>
      <p>조명은 공간의 분위기와 감정 상태를 표현하는 중요한 역할을 합니다. 불안한 장면에서는 짧은 깜빡임과 
         불규칙한 패턴의 조명을 사용하고, 해방감을 느끼는 장면에서는 따뜻하고 밝은 조명을 활용했습니다.</p>
      <p>특히 주인공의 공황 발작 장면에서는 조명의 색상과 강도를 통해 심리적 압박감을 표현했습니다. 
         이는 관객들이 주인공의 내면 상태를 시각적으로 경험할 수 있도록 하기 위함입니다.</p>
      <p>음향은 관객이 주인공의 내면을 체험할 수 있도록 설계했습니다. 공황 발작 순간의 심장 소리, 
         숨소리, 주변 소음의 증폭을 통해 불안 장애를 겪는 사람의 감각적 경험을 전달하고자 했습니다.</p>
      <p>음악은 주로 현대적 클래식과 전자음악을 결합하여 현대인의 고립과 불안을 표현했습니다. 
         특히 광장 장면과 내면 장면의 대비를 통해 개인과 집단, 자아와 타자의 관계를 
         청각적으로 경험할 수 있도록 구성했습니다.</p>
    </>
  );
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <style jsx global>{globalStyles}</style>
        
        <AuthorSection 
          authorInfo="무대 디자이너 김재원"
          sectionIndex={1}
        >
          {stageDesignerContent}
        </AuthorSection>

        <AuthorSection 
          authorInfo="의상 디자이너 박수지"
          sectionIndex={2}
        >
          {costumeDesignerContent}
        </AuthorSection>
        
        <AuthorSection 
          authorInfo="조명/음향 디자이너 이태현"
          isLast={true}
          sectionIndex={3}
        >
          {lightSoundDesignerContent}
        </AuthorSection>
      </div>
    )
  };
} 