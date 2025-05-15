import "../styles/globals.css";
import { ModalProvider } from '../contexts/ModalContext';
import Head from 'next/head';
import { useEffect } from 'react';
import { preloadCoreSections } from '../sections/sectionMap';

export default function App({ Component, pageProps }) {
  // 코어 섹션들을 미리 로드
  useEffect(() => {
    // 페이지 로드 후에 핵심 섹션 미리 로드
    const timer = setTimeout(() => {
      preloadCoreSections();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <ModalProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="아고라포비아 - 연극 공연 프로그램북" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
    </ModalProvider>
  );
}
