import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export function OptimizedImage({ 
  src, 
  alt, 
  className, 
  onClick, 
  fallbackSrc = '/images/placeholder.jpg',
  priority = false
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
      className={`animated-image-wrapper ${inView ? 'visible' : ''} ${isLoaded ? 'loaded' : 'loading'}`}
    >
      {inView && (
        <div style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
          <img 
            src={imgSrc}
            alt={alt}
            className={`animated-image ${className || ''}`}
            onClick={onClick}
            onError={handleError}
            onLoad={handleLoad}
            style={{ 
              width: '100%',
              height: 'auto',
              display: 'block',
              cursor: onClick ? 'pointer' : 'default'
            }}
            loading={priority ? 'eager' : 'lazy'}
          />
        </div>
      )}
      {(!isLoaded || !inView) && <div className="image-placeholder"></div>}
    </div>
  );
} 