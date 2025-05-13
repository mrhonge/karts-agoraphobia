import { useEffect, useState } from 'react';
import { loadCredits } from '../utils/parseCredits';
import styles from './CreditTable.module.css';

export default function CreditTable() {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 여부 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    async function loadCreditData() {
      try {
        const data = await loadCredits();
        setCredits(data);
      } catch (error) {
        console.error('크레딧 데이터 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    }

    loadCreditData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>크레딧 정보를 불러오는 중...</div>;
  }

  return (
    <div className={styles.creditContainer}>
      <div className={styles.creditScroll}>
        {credits.map((credit, index) => (
          <div key={index} className={styles.creditRow}>
            <div className={`${styles.creditCell} ${styles.role}`}>{credit.역할}</div>
            <div className={`${styles.creditCell} ${styles.name}`}>{credit.이름}</div>
            <div className={`${styles.creditCell} ${styles.department}`}>{credit.소속학과}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 