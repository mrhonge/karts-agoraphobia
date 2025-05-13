import { useEffect, useRef } from 'react';

export default function Modal({ isOpen, onClose, children, title }) {
  const modalRef = useRef(null);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // 모달 열릴 때 스크롤 방지
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = ''; // 모달 닫힐 때 스크롤 허용
    };
  }, [isOpen, onClose]);
  
  // 모달 열릴 때 포커스 이동
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  // 모달 외부 클릭 시 닫기
  const handleModalClick = (e) => {
    if (e.target.className.includes('modal-overlay')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={handleModalClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="modal-content"
        ref={modalRef}
        tabIndex="-1"
      >
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">{title}</h2>
          <button 
            className="close-button" 
            onClick={onClose}
            aria-label="모달 닫기"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}