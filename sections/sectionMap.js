const sectionMap = {
  1: () => import('./Section1'),
  2: () => import('./Section2'),
  3: () => import('./Section3'),
  4: () => import('./Section4'),
  5: () => import('./Section5'),
  7: () => import('./Section7')
};

export default sectionMap; 