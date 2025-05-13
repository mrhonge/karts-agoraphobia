import Papa from 'papaparse';

export async function loadCredits() {
  try {
    const response = await fetch('/data/credits.csv');
    const csvText = await response.text();
    
    return new Promise((resolve) => {
      Papa.parse(csvText, {
        header: true,
        complete: (results) => {
          resolve(results.data);
        }
      });
    });
  } catch (error) {
    console.error('크레딧 데이터 로딩 실패:', error);
    return [];
  }
} 