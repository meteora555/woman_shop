import Head from 'next/head';
import Home from './home';

// Рендерим основную страницу,с компонентом home
const HomePage: React.FC = () => {
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
