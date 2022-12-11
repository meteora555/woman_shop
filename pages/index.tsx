import Head from 'next/head';
import Home from './home';

// Рендерим основную страницу,с компонентом home
const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Woman Shop</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
