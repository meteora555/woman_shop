import React, { useState } from 'react';
import { CatalogItem, Footer, HeaderDark, ModalCart, NavBar } from '../components';
import Products from '../pages/api/product';

export default function Catalog() {
  React.useEffect(() => {
    Products();
    console.log(Products);
  }, []);
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
