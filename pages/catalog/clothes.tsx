import React, { useState } from 'react';

import { CatalogItem, Footer, HeaderCatalog, CatalogFilter } from '../../components';
import {
  useGetProductsCategoryQuery,
  useSortProductsByPriceQuery,
  useGetProductsPageQuery,
} from '../../store/product/product.api';
import { useTypedSelector } from '../../store';

import { Select, FloatButton, Pagination, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Catalog: React.FC = () => {
  //В конечном варианте, использован хук из Rtk.
  //из стейта берем определенную категорию
  //После, передаем ее в специальный хук из апи, с определенными квери параметрами, затем мепим полученную нашу дату,и рендерим компонент CatalogItem, в пропсы передаем весь обьект

  const { categoryId } = useTypedSelector((state) => state.filter);
  const { data, error, isLoading } = useGetProductsCategoryQuery(categoryId);

  // С помощью useState изменяем сортировку и велью передаем в специальный хук

  const { Option } = Select;
  const [fieldValue, setFieldValue] = useState('Популярные');
  const {} = useSortProductsByPriceQuery(fieldValue);

  // Настройки для пагинации,отслеживаем страницу, передаем в usestate оттуда передаем в хук, с опр квери параметрами
  const [page, setPage] = useState(1);
  const {} = useGetProductsPageQuery(1);

  //Настройки для спинера,появляется во время загрузки основного каталога.
  const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;
  console.log(isLoading);

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
              onChange={(value) => {
                setFieldValue(value);
              }}>
              {/*При желании можно добавить другие параметры <Option value="">Популярные</Option> */}
              <Option value="asc">По дороже</Option>
              <Option value="desc">По дешевле</Option>
            </Select>
          </div>
        </div>

        {/* отлавливаем загрузку,и показываем , по окончании показываем контент,
        также смотрим на загрузку картинок и прокидываем в пропсы, для корректного отображения картинок и скелетона */}

        {isLoading ? (
          <Spin indicator={antIcon} />
        ) : (
          <div className="main__catalog__products">
            <CatalogFilter />
            <div className="catalog__block">
              <div className="catalog__items">
                {data &&
                  data.map((product: any) => (
                    <CatalogItem key={product.id} product={product} loading={isLoading} />
                  ))}
              </div>
            </div>
          </div>
        )}

        <Pagination
          defaultCurrent={1}
          total={10}
          size="small"
          // hideOnSinglePage={true}
          onChange={(page, pageSize) => {
            setPage(page);
          }}
        />
      </div>
      <FloatButton.BackTop />
      <Footer />
    </div>
  );
};

export default Catalog;

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
