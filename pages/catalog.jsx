import { CatalogItem, Footer, HeaderDark, NavBar } from '../components';

const BASE_URL = 'https://632346ad362b0d4e7de066f9.mockapi.io/clothes';
const API_URL = 'http://localhost:3000/api/clothes';
export const getStaticProps = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { clothes: data },
  };
};

export default function Catalog({ clothes }) {
  return (
    <div className="container">
      <HeaderDark />
      <NavBar />

      <div className="catalog">
        <div className="catalog__items">
          {clothes &&
            clothes.map(({ id, imageUrl, name, price }) => (
              <CatalogItem key={id} image={imageUrl} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
