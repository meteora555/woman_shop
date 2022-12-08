import Item from './item/[id]';
import { CatalogItem, Footer, HeaderDark, ModalAside, ModalCart, NavBar } from '../components';

export default function Catalog() {
  return (
    <div className="container">
      <HeaderDark />
      <NavBar />
      <ModalAside />
      {/* <ModalCart /> */}
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
