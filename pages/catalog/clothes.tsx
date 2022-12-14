import React from 'react';

import { CatalogItem, Footer, HeaderCatalog, CatalogFilter } from '../../components';
import { useGetProductsCategoryQuery, useGetProductsQuery } from '../../store/product/product.api';

import { Select } from 'antd';
import { useTypedSelector } from '../../store';

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

const Catalog: React.FC = () => {
  //В конечном варианте, использован хук из Rtk.

  //из стейта берем определенную категорию
  const { categoryId } = useTypedSelector((state) => state.filter);

  //После, передаем ее в специальный хук из апи, с определенными квери параметрами, затем мепим полученную нашу дату,и рендерим компонент CatalogItem, в пропсы передаем весь обьект

  const { data, error, isLoading } = useGetProductsCategoryQuery(categoryId);

  return (
    <div className="container">
      <HeaderCatalog />
      <section className="section-title-block">
        <h2>ОДЕЖДА</h2>
        <p>
          Каким вы видите свой идеальный гардероб? Возможно, в нем преобладают вещи в стиле casual
          или классика. Или же основу составляют спортивные модели. А может, вы предпочитаете
          акцентные предметы с деталями, которые приковывают внимание. Мы выпускаем такие коллекции,
          чтобы для всех образов вы смогли подобрать комфортные и доступные по стоимости элементы.
          Новый сезон — новые тренды. Самое время узнать их поближе.
        </p>
      </section>
      <div className="main__catalog">
        <div className="main__catalog__sort">
          <div className="main__catalog__sort-menu">
            <Select
              showSearch={false}
              style={{ width: 200 }}
              placeholder="Сортировать"
              optionFilterProp="children"
              filterOption={(input, option) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'По дешевле',
                },
                {
                  value: '2',
                  label: 'По дороже',
                },
                {
                  value: '3',
                  label: 'Популярные',
                },
              ]}
            />
          </div>
        </div>
        <div className="main__catalog__products">
          {/* here */}

          <CatalogFilter />
          <div className="catalog__block">
            <div className="catalog__items">
              {data &&
                data.map((product: any) => <CatalogItem key={product.id} product={product} />)}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
