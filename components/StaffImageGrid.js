import { useState, useEffect } from 'react';
import styles from './StaffImageGrid.module.css';

export default function StaffImageGrid() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // public/people 폴더에 있는 모든 이미지를 가져오는 함수
    async function fetchImageFiles() {
      try {
        // 일반적으로 서버에서 이미지 목록을
        // 동적으로 가져오는 API가 필요하지만, 여기서는 정적 목록 사용
        const imageFiles = [
          '연출_박지원.jpg',
          '배우_이승연.jpg',
          '배우_이정은.jpg',
          '배우_예지민.jpg',
          '배우_이산하.jpg',
          '배우(코러스장)_김예슬.jpg',
          '배우_나윤희.jpg',
          '배우_민동혁.jpg',
          '무대감독_이여원.jpg',
          '조연출_이정아.jpg',
          '작가_홍경민.jpg',
          '작가_임현서.jpg',
          '조연출_한이령.jpg',
          '의상디자인_신슬기.jpg',
          '음악디자인_홍석영.jpg',
          '하우스디자인_정나연.jpg',
          '기획_권지혜.jpg',
          '기획_박용훈.jpg',
          '포토콜_김하영.jpg',
          '프로필_박현영.jpg',
          '접근성_최정인.jpg',
          '소품디자인_이지현.jpg',
          '실황촬영-한송연.jpg',
          '그래픽디자인_길민성.jpg',
          '영상-곡수인.jpg',
          '드라마터그_오성경.jpg',
          '조명디자인_박나경.jpg',
          '무대디자인_이동현.jpg',
          '무대감독_이호영.jpg',
          '영상_송미진.jpg',
          '작가_김한인.jpg',
          '작가_이진.jpg'
        ];

        // 이미지 메타데이터 생성
        const imageData = imageFiles.map(filename => {
          // 파일명에서 역할과 이름 추출
          let role = '';
          let name = '';
          
          // 파일명 형식에 따라 역할과 이름 분리
          if (filename.includes('_')) {
            const parts = filename.split('_');
            role = parts[0];
            name = parts[1].replace('.jpg', '');
          } else if (filename.includes('-')) {
            const parts = filename.split('-');
            role = parts[0];
            name = parts[1].replace('.jpg', '');
          } else if (filename.includes('(')) {
            // '배우(코러스장)_김예슬.jpg' 같은 형식 처리
            const rolePart = filename.split('_')[0];
            role = rolePart;
            name = filename.split('_')[1].replace('.jpg', '');
          }
          
          return {
            filename,
            role,
            name,
            src: `/people/${filename}`
          };
        });
        
        setImages(imageData);
        setLoading(false);
      } catch (error) {
        console.error('이미지 로딩 실패:', error);
        setLoading(false);
      }
    }

    fetchImageFiles();
  }, []);

  // 이미지 클릭 시 팝업 표시
  const openPopup = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // 팝업 열릴 때 스크롤 방지
  };

  // 팝업 닫기
  const closePopup = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // 스크롤 허용
  };

  // ESC 키 누르면 팝업 닫기
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  if (loading) {
    return <div className={styles.loading}>이미지를 불러오는 중...</div>;
  }

  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className={styles.imageCard}
            onClick={() => openPopup(image)}
          >
            <div className={styles.imageWrapper}>
              <img 
                src={image.src} 
                alt={`${image.name} (${image.role})`} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/placeholder.svg'; // SVG 대체 이미지 사용
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* 이미지 팝업 */}
      {selectedImage && (
        <div className={styles.popup} onClick={closePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closePopup}>×</button>
            <div className={styles.popupImageWrapper}>
              <img 
                src={selectedImage.src} 
                alt={`${selectedImage.name} (${selectedImage.role})`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/placeholder.svg';
                }}
              />
            </div>
            <div className={styles.popupInfo}>
              <div className={styles.popupName}>{selectedImage.name}</div>
              <div className={styles.popupRole}>{selectedImage.role}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 