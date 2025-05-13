import React from 'react';
import ExpandableText from './ExpandableText';
import ImageSlider from './ImageSlider';

const AuthorSection = ({ 
  authorInfo, 
  children, 
  isLast = false, 
  sectionIndex,
  showSlider = false,
  sliderImages = [],
  sliderTitle = "이미지 갤러리",
  title = ""
}) => {
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
  
  const sectionTitleStyle = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#755E54',
    borderLeft: '4px solid #755E54',
    paddingLeft: '12px'
  };
  
  return (
    <div style={authorSectionStyle} id={`author-section-${sectionIndex}`}>
      <div style={authorInfoStyle}>{authorInfo}</div>
      {title && <div style={sectionTitleStyle}>{title}</div>}
      <div style={contentBodyStyle} className="content-body">
        <ExpandableText 
          text={children}
          maxHeight={150}
          showMoreText="더 보기"
        />
      </div>
      
      {showSlider && sliderImages.length > 0 && (
        <ImageSlider 
          images={sliderImages} 
          title={sliderTitle} 
        />
      )}
    </div>
  );
};

export default AuthorSection; 