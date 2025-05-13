import { useState, useRef, useEffect } from 'react';
import styles from './ExpandableText.module.css';

export default function ExpandableText({ text, maxHeight = 200, showMoreText = "더보기" }) {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isButtonFixed, setIsButtonFixed] = useState(false);
  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // 콘텐츠의 실제 높이를 확인하여 버튼 표시 여부 결정
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setShowButton(contentHeight > maxHeight);
    }
  }, [text, maxHeight]);

  useEffect(() => {
    if (!expanded || !buttonRef.current || !containerRef.current) return;

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      if (!buttonRef.current || !containerRef.current || !contentRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const buttonHeight = buttonRef.current.offsetHeight;
      
      // 콘텐츠 하단에서 버튼 높이와 마진을 뺀 위치 계산
      const dockPosition = contentRect.bottom - buttonHeight - 20;
      const viewportBottom = window.innerHeight;
      
      // 버튼이 고정될지 결정
      if (dockPosition <= viewportBottom && containerRect.bottom > viewportBottom) {
        setIsButtonFixed(true);
      } else {
        setIsButtonFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // 초기 위치 확인을 위해 한 번 실행
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [expanded]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
    // 축소할 때는 스크롤 위치를 컨테이너 상단으로 조정
    if (expanded && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.expandableTextContainer} ref={containerRef}>
      <div 
        ref={contentRef}
        className={`${styles.textContent} ${expanded ? styles.expanded : ''}`}
        style={{ maxHeight: expanded ? 'none' : `${maxHeight}px` }}
      >
        {text}
      </div>
      
      {showButton && (
        <button 
          ref={buttonRef}
          className={`
            ${styles.expandButton} 
            ${expanded ? styles.expanded : ''} 
            ${expanded && isButtonFixed ? styles.fixed : ''}
          `}
          onClick={toggleExpanded}
        >
          {expanded ? '접기' : showMoreText}
        </button>
      )}
    </div>
  );
} 