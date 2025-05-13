import React from 'react';

const HorizontalImagePair = ({ 
  leftImage, 
  rightImage, 
  leftAlt="왼쪽 이미지", 
  rightAlt="오른쪽 이미지",
  caption="",
  height="300px"
}) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '20px',
    marginBottom: '20px'
  };
  
  const imagesContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    gap: '10px'
  };
  
  const imageStyle = {
    width: 'calc(50% - 5px)',
    height: height,
    objectFit: 'cover',
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };
  
  const captionStyle = {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '0.9rem',
    color: '#666'
  };
  
  return (
    <div style={containerStyle}>
      <div style={imagesContainerStyle}>
        <img 
          src={leftImage} 
          alt={leftAlt} 
          style={imageStyle} 
        />
        <img 
          src={rightImage} 
          alt={rightAlt} 
          style={imageStyle} 
        />
      </div>
      {caption && <div style={captionStyle}>{caption}</div>}
    </div>
  );
};

export default HorizontalImagePair; 