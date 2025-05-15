// 컴포넌트 동적 임포트 - 성능 최적화를 위한 프리페치 설정
const sectionMap = {
  1: () => import('./Section1'),
  2: () => import('./Section2'),
  3: () => import('./Section3'),
  4: () => import('./Section4'),
  5: () => import('./Section5'),
  6: () => import('./Section6'),
  7: () => import('./Section7'),
  8: () => import('./Section8'),
  9: () => import('./Section9'),
  10: () => import('./Section10')
};

// CSR에서 프리페치 구현을 위한 함수
export const prefetchSection = (sectionId) => {
  if (typeof window !== 'undefined' && sectionMap[sectionId]) {
    // 백그라운드에서 섹션 프리페치
    sectionMap[sectionId]().catch(() => {
      // 프리페치 실패 시 조용히 에러 무시
    });
  }
};

// 사전 로드를 위해 핵심 섹션 미리 정의
export const preloadCoreSections = () => {
  if (typeof window !== 'undefined') {
    // 사용자 경험상 가장 중요한 섹션 순서대로 미리 로드
    [1, 2, 3].forEach(id => prefetchSection(id));
  }
};

export default sectionMap; 