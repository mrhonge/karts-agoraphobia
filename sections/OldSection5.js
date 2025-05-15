import sectionsData from '../data/sections';
import { useState, useEffect, useId } from 'react';
import ExpandableText from '../components/ExpandableText';
import React from 'react';

export default function OldSection5() {
  const section = sectionsData[5];
  
  const AuthorSection = ({ authorInfo, children, isLast, sectionIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const uniqueId = useId(); // 각 섹션에 고유 ID 부여
    
    // 이미지 갤러리 데이터
    const images = [
      '/practice-image/image1.jpg',
      '/practice-image/image2.jpg',
      '/practice-image/image3.jpg',
      '/practice-image/image4.jpg',
      '/practice-image/image5.jpg',
      '/practice-image/image6.jpg',
      '/practice-image/image7.jpg',
      '/practice-image/image8.jpg',
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
            <div style={sliderTitle}>작품 제작 과정</div>
            <div style={slideStyle}>
              <img
                src={images[currentIndex]}
                alt={`제작 과정 이미지 ${currentIndex + 1}`}
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
  
  // 정아 작가의 콘텐츠
  const jeongaContent = (
    <>
      <p><strong>"우리는 광장을 이야기합니다."</strong></p>
      <p>아끼고 사랑하는 친구들이 모여 써 내려간 광장 이야기. 
        이 작품과 프로덕션을 처음 만났을 때, 제게 가장 먼저 다가온 감정은 두려움이었습니다. 
        반 년이 넘는 시간 동안 광장이 무엇인지 깊이 고민해 온 그들 앞에서, 제 스스로가 너무나 무지하게 느껴졌습니다.</p>
      <p>그래서 모두가 모이는 연습실은 제게 늘 하나의 광장이었습니다. 
        광장을 너무도 잘 알고 있는 이들 앞에서 '모르는 나'를 드러낸다는 것은, 생각보다 훨씬 더 무서운 일이었거든요.</p>
      <p>하지만 연습을 이어가며, 그리고 작품 속 수많은 광장의 사람들을 만나며 '모르는 나' 혹은 '두려워하는 나' 또한 
        광장을 이루는 하나의 원소가 되는 모습을 보았습니다. 작품 속 존재들이 두려움에 떨고, 화를 내고, 외치고, 슬퍼하고, 
        또 웃을 때마다 저는 광장 속 저를 바라볼 수 있었습니다. 멀게만 느껴졌던 그 광장의 이야기가 어느새 성큼 제 앞에 서 있었습니다.</p>
      <p>지금도 저에게 연습실은 여전히 광장입니다. 그러나 이제는 내 목소리를 낼 수 있고, 모르는 것들은 물어볼 수 있으며, 
        나의 이야기를 기꺼이 꺼내놓고 싶은 광장이 되었습니다.</p>
      <p>그리고 극장에서 저희의 광장을 마주할 여러분 또한 광장이 우리에게 건네는 그 힘을 느낄 수 있기를 진심으로 바랍니다.</p>
    </>
  );
  
  // 한이령 작가의 콘텐츠
  const haniryeongContent = (
    <>
      <p>맨 처음, 우리는 광장에 대한 뒷담으로 이야기를 시작했습니다.</p>
      <p>너도 있고 나도 있고. 그런데 없었던 것도 같고. 그 새끼까지 있다는 게 좀 짜증은 나지만, 
        결국은 그래서 광장이 아닌가, 하는 것에 대해 말이에요. 
        우리는 그렇게 우리의 이야기 속 광장을 들여다보고, 그것을 여러분에게 가장 잘 보여줄 수 있는 방법을 고민했습니다. </p>
      <p>그 시간동안 적잖은 방황을 겪으며 가장 신기했던 것은, 그토록 함께 헤매이면서도 본래 우리가 정해둔 목적지가 어디였는지를 잊지 않고 
        계속해서 환기시켜주는 팀원들의 모습이었어요. 장면에 대한 고민이 깊어지고 이 곳이 어디인지 점점 모르겠을 때 즈음이 오면, 
        귀신같이 결국 우리가 말하려는 바는 무엇이었는지를 원점으로 돌아가 되짚어주는 팀원들이 있었습니다.</p>
      <p>덕분에 길을 잃을까 하는 두려움 없이 헤매임을 온전히 즐길 수 있었고, 하나의 지점을 동일한 지향으로 두고 함께 고민한다는 것이 
        얼마나 근사한 일인지를 알게 되어서 내가 이들 속에서 느낀 안전함과 광장에 대한 고민을 객석에서도 경험할 수 있기를, 
        시간이 지날수록 점점 원하게 되었습니다.</p>
      <p>그러다보면 나는 이들이 알려준 것처럼 우리가 처음 찍었던 지향점을 다시 떠올려보게 됩니다.<br />
        광장이란 무엇인가?<br />
        모두에게 열려 있다고는 하지만 사실은 두려운 그곳에 대해<br />
        하고 싶은 말과 듣기 싫은 말이 모두 있는 그곳에 대해<br />
        온갖 양면성은 홀로 몽땅 끌어안고 있는 것 같은 그곳에 대해.</p>
      <p>광장의 조각을 끼워맞추려 노력한 지난 8주동안 나는 내가 비로소 나의 광장을 갖게 된다면 우리 팀을 닮은 곳이었으면 좋겠다고, 
        기어이에는 생각하게 되었습니다.</p>
    </>
  );
  
  return {
    title: section.title,
    content: (
      <div className="modal-content-wrapper">
        <style jsx global>{globalStyles}</style>
        
        <AuthorSection 
          authorInfo="조연출 이정아 (연극원 연출과 예술사 21)"
          sectionIndex={1}
        >
          {jeongaContent}
        </AuthorSection>

        <AuthorSection 
          authorInfo="조연출 한이령 (연극원 연출과 예술사 24)" 
          isLast={true}
          sectionIndex={2}
        >
          {haniryeongContent}
        </AuthorSection>
      </div>
    )
  };
} 