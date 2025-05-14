import "../styles/globals.css";
import { ModalProvider } from '../contexts/ModalContext';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <Component {...pageProps} />
    </ModalProvider>
  );
}
