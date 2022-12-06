import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { store } from '../store/index';

import { Header, MainContent, Footer } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header />
        <MainContent />
        <Component {...pageProps} />
      </div>

      {/* <Footer /> */}
    </Provider>
  );
}
