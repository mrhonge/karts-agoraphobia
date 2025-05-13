// components/AnimatedImage.js
import { useInView } from 'react-intersection-observer';

export function AnimatedImage({ src, alt, className, onClick }) {
  const [ref, inView] = useInView({
    threshold: 0.1, // 이미지가 10% 보일 때 트리거
    triggerOnce: true, // 한 번만 애니메이션 실행
  });

  return (
    <div 
      ref={ref} 
      className={`animated-image-wrapper ${inView ? 'visible' : ''}`}
    >
      <img 
        src={src} 
        alt={alt} 
        className={`animated-image ${className || ''}`}
        onClick={onClick}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      />
    </div>
  );
}