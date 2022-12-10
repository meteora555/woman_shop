import { CatalogItem, Footer, HeaderDark, NavBar } from '../components';
import { useGetProductsQuery } from '../store/product/product.api';
// Тренировался несколькими способами получать данные, обычный фетч запрос по документации NextJs, с помощью своего апи из папки, и с помощью RTK
// const BASE_URL = 'https://632346ad362b0d4e7de066f9.mockapi.io/clothes';
// const API_URL = 'http://localhost:3000/api/clothes';
// export const getStaticProps = async () => {
//   const response = await fetch(BASE_URL);
//   const data = await response.json();
//   console.log(data);

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { clothes: data },
//   };
// // };
// {clothes &&
//   clothes.map(({ id, imageUrl, name, price }) => (
//     <CatalogItem key={id} image={imageUrl} name={name} price={price} />
//   ))}

export default function Catalog() {
  const { data, isLoading, error } = useGetProductsQuery(32);
  return (
    <div className="container">
      <HeaderDark />
      <NavBar />

      <div className="catalog">
        <div className="catalog__items">
          {data?.map((product: any) => (
            <CatalogItem
              key={product.id}
              image={product.imageUrl}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
