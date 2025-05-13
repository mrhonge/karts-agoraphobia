import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export function OptimizedImage({ 
  src, 
  alt, 
  className, 
  onClick, 
  fallbackSrc = '/images/placeholder.jpg'
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [imgError, setImgError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const handleError = () => {
    if (!imgError && fallbackSrc) {
      setImgSrc(fallbackSrc);
      setImgError(true);
    }
  };
  
  const handleLoad = () => {
    setIsLoaded(true);
  };
  
  return (
    <div 
      ref={ref} 
      className={`optimized-image-wrapper ${inView ? 'visible' : ''} ${isLoaded ? 'loaded' : 'loading'}`}
    >
      {inView && (
        <img 
          src={imgSrc}
          alt={alt}
          className={`optimized-image ${className || ''}`}
          onClick={onClick}
          onError={handleError}
          onLoad={handleLoad}
          style={{ cursor: onClick ? 'pointer' : 'default' }}
          loading="lazy"
        />
      )}
      {(!isLoaded || !inView) && <div className="image-placeholder"></div>}
    </div>
  );
} 