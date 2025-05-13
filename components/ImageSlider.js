import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, title = "이미지 갤러리", autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
    }, autoSlideInterval);
    
    return () => clearInterval(interval);
  }, [images.length, autoSlideInterval]);
  
  const sliderContainer = {
    marginTop: '50px',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
    height: '400px'
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
  
  // 이미지가 없거나 배열이 아닌 경우 처리
  if (!images || !Array.isArray(images) || images.length === 0) {
    return null;
  }
  
  return (
    <div style={sliderContainer}>
      {title && <div style={sliderTitle}>{title}</div>}
      <div style={slideStyle}>
        <img
          src={images[currentIndex]}
          alt={`슬라이드 이미지 ${currentIndex + 1}`}
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
  );
};

export default ImageSlider; 