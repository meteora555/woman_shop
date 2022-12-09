import React, { useState } from 'react';
import { CatalogItem, Footer, HeaderDark, ModalCart, NavBar } from '../components';

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
