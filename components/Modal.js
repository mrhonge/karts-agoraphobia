import { useEffect, useRef, useState } from 'react';
import styles from './Modal.module.css';

export default function Modal({ isOpen, onClose, children, title }) {
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') handleClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // 모달 열릴 때 스크롤 방지
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = ''; // 모달 닫힐 때 스크롤 허용
    };
  }, [isOpen]);
  
  // 모달 열릴 때 포커스 이동
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // 애니메이션 지속 시간과 동일하게 설정
  };

  // 모달 외부 클릭 시 닫기
  const handleModalClick = (e) => {
    if (e.target.classList.contains(styles.modalOverlay)) {
      handleClose();
    }
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div 
      className={`${styles.modalOverlay} ${isClosing ? styles.closing : ''}`}
      onClick={handleModalClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className={`${styles.modalContent} ${isClosing ? styles.closing : ''}`}
        ref={modalRef}
        tabIndex="-1"
      >
        <div className={styles.modalHeader}>
          <h2 id="modal-title" className={styles.modalTitle}>{title}</h2>
          <button 
            className={styles.closeButton} 
            onClick={handleClose}
            aria-label="모달 닫기"
          >
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>
  );
}