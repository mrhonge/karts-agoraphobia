import "../styles/globals.css";
import { ModalProvider } from '../contexts/ModalContext';

export default function App({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}
