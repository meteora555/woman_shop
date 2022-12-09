import { CatalogItem, Footer, HeaderDark, NavBar } from '../components';

const BASE_URL = 'https://632346ad362b0d4e7de066f9.mockapi.io/clothes';
export const getStaticProps = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { products: data },
  };
};

export default function Catalog() {
  return (
    <div className="container">
      <HeaderDark />
      <NavBar />

      <div className="catalog">
        <div className="catalog__items">
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
        </div>
      </div>
      <Footer />
    </div>
  );
}
