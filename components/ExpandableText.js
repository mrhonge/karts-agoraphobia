import { useState, useRef, useEffect } from 'react';
import styles from './ExpandableText.module.css';

export default function ExpandableText({ text, maxHeight = 200, showMoreText = "더보기" }) {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const contentRef = useRef(null);

  // 클라이언트 사이드에서만 실행되도록 isBrowser 체크
  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    // 콘텐츠의 실제 높이를 확인하여 버튼 표시 여부 결정
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setShowButton(contentHeight > maxHeight);
    }
  }, [text, maxHeight]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.expandableTextContainer}>
      <div 
        ref={contentRef}
        className={`${styles.textContent} ${expanded ? styles.expanded : ''}`}
        style={{ maxHeight: expanded ? 'none' : `${maxHeight}px` }}
      >
        {text}
      </div>
      
      {showButton && (
        <button 
          className={`${styles.expandButton} ${expanded ? styles.expanded : ''}`}
          onClick={toggleExpanded}
          aria-expanded={expanded}
          aria-label={expanded ? '접기' : showMoreText}
        >
          {expanded ? '접기' : showMoreText}
        </button>
      )}
    </div>
  );
} 