import React, { useState } from 'react';
import { CatalogItem, Footer, HeaderDark, ModalCart, NavBar } from '../components';

export default function Catalog() {
  /* Подумать если будет время, создание ф-и для обьединения показа модальных окон */

  const [visibleCart, setVisebleCart] = useState(false);

  const cartRef = React.useRef();

  const toogleVisibleCart = () => {
    setVisebleCart(!visibleCart);
    console.log('блы клик');
  };
  //ф-я для определения клика вне области модальных окон

  // const handleOutsideClick = (e: any) => {
  //   switch (e) {
  //     case '!e.path.includes(asideRef.current)':
  //       setVisebleAside(false);
  //       console.log(e);

  //     case '!e.path.includes(cartRef.current)':
  //       setVisebleCart(false);
  //   }
  // };

  // создаем обраотчик событий на body для отслеживание клика

  return (
    <div className="container">
      <HeaderDark />
      <NavBar />

      {visibleCart && <ModalCart />}
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
