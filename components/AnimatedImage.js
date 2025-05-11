// components/AnimatedImage.js
import { useInView } from 'react-intersection-observer';

export function AnimatedImage({ src, alt, className, onClick }) {
  const [ref, inView] = useInView({
    threshold: 0.1, // 이미지가 10% 보일 때 트리거
    triggerOnce: true, // 한 번만 애니메이션 실행
  });

  const styles = {
    imageWrapper: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.8s ease-out'
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
      transition: 'transform 0.3s ease',
      cursor: onClick ? 'pointer' : 'default'
    }
  };

  return (
    <div 
      ref={ref} 
      style={styles.imageWrapper}
    >
      <img 
        src={src} 
        alt={alt} 
        style={styles.image}
        onClick={onClick}
        className={className || ''}
      />
    </div>
  );
}