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
  title = "",
  expandableDisabled = false
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
    paddingBottom: '5px',
    borderBottom: '1px solid #eee'
  };
  
  const contentBodyStyle = {
    lineHeight: '1.7',
    fontSize: '1rem'
  };
  
  const sectionTitleStyle = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#755E54',
    borderLeft: '4px solid #755E54',
    paddingLeft: '12px'
  };
  
  return (
    <div style={authorSectionStyle} id={`author-section-${sectionIndex}`}>
      {title && <div style={sectionTitleStyle}>{title}</div>}
      <div style={authorInfoStyle}>{authorInfo}</div>
      <div style={contentBodyStyle} className="content-body">
        {expandableDisabled ? (
          children
        ) : (
          <ExpandableText 
            text={children}
            maxHeight={150}
            showMoreText="더 보기"
          />
        )}
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