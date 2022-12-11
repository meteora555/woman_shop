import React, { FC } from 'react';
import { CatalogItem, Footer, HeaderCatalog, NavBar } from '../components';
import { useGetProductsQuery } from '../store/product/product.api';

import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';

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

const Catalog: FC = () => {
  //В конечном варианте, использован хук из Rtk, затем мепим нашу дату,и рендерим компонент CatalogItem, в пропсы передаем весь обьект
  const { data, isLoading, error } = useGetProductsQuery(32);

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
      <section className="main__catalog">
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
          <div className="catalog__filter">
            <h2>Категории</h2>
            <ul className="catalog__filter-list">
              <li className="catalog__filter-item">
                <button className="catalog__btn">Джинсы</button>
              </li>
              <li className="catalog__filter-item">
                <button className="catalog__btn">Футболки</button>
              </li>
              <li className="catalog__filter-item">
                <button className="catalog__btn">Блузы</button>
              </li>
              <li className="catalog__filter-item">
                <button className="catalog__btn">Юбки</button>
              </li>
              <li className="catalog__filter-item">
                <button className="catalog__btn">Свитшоты</button>
              </li>
              <li className="catalog__filter-item">
                <button className="catalog__btn">Топы и майки</button>
              </li>
              <li className="catalog__filter-item">
                <button className="catalog__btn">Платья</button>
              </li>
              <li className="catalog__filter-item">
                <button className="catalog__btn">Брюки</button>
              </li>
            </ul>
          </div>
          <div className="catalog__block">
            <div className="catalog__items">
              {data?.map((product: any) => (
                <CatalogItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;
