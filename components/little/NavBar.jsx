import React, { useState, useRef } from 'react';
import Image from 'next/image';
import ModalCartItem from '../little/ModalCartItem';

export default function NavBar() {
  const [visibleCart, setVisebleCart] = useState(true);
  const cartRef = useRef();
  const toogleVisibleCart = () => {
    setVisebleCart(!visibleCart);
    console.log(cartRef);
  };

  // React.useEffect(() => {
  //   console.log('cart mount');
  //   const OutsideClickCart = (event) => {
  //     if (!event.path.includes(cartRef.current)) {
  //       setVisebleCart(false);
  //       console.log('click outside');
  //       console.log(cartRef.current);
  //       console.log(event.path);
  //     }
  //   };

  //   document.body.addEventListener('click', OutsideClickCart);

  //   return () => document.body.removeEventListener('click', OutsideClickCart);
  // }, []);

  return (
    <div className="bar">
      {visibleCart && (
        <div ref={cartRef} className="modalCart">
          <div className="modalCart__wraper">
            <div className="modalCart__btn">
              <button onClick={setVisebleCart(false)}>закрыть</button>
              <h2>Корзина</h2>
            </div>
            <div className="modalCart__items">
              <ModalCartItem />
              <ModalCartItem />
              <ModalCartItem />
              <ModalCartItem />
              <ModalCartItem />
              <ModalCartItem />
              <ModalCartItem />
            </div>
            <div className="total">
              <button>ПРОДОЛЖИТЬ ПОКУПКИ</button>
              <button>ОФОРМИТЬ ЗАКАЗ</button>

              <div className="total__items">
                <p>Всего товаров</p>
                <p>25 штук</p>
              </div>
              <div className="total__price">
                <p>Стоимость</p>
                <p>25000 ₽</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bar__filter">
        <ul className="bar__filter-list">
          <li className="bar__filter-item">
            <button className="bar__btn">
              <Image src="/content/icons/filter-btn.svg" height={25} width={25} alt="filter-icon" />
            </button>
            <p>ФИЛЬТРОВАТЬ</p>
          </li>
          <li className="bar__filter-item">
            <button className="bar__btn">
              <Image
                src="/content/icons/collection.svg"
                height={25}
                width={25}
                alt="collection-icon"
              />
            </button>
            <p>КОЛЛЕКЦИЯ</p>
          </li>
          <li className="bar__filter-item">
            <button className="bar__btn">
              <Image
                src="/content/icons/search-dark.svg"
                height={25}
                width={25}
                alt="filter-icon"
              />
            </button>
            <p>ПОИСК ПО АРТИКУЛУ</p>
          </li>
        </ul>
      </div>
      <div className="bar__sort">
        <p>Сортировка:</p>
      </div>
      <div className="sort__popup"></div>
      <div className="bar__cart">
        <span>
          <button
            className="cart__btn"
            onClick={() => {
              setVisebleCart(true);
              console.log(visibleCart);
            }}>
            <Image src="/content/icons/cart-btn.png" height={37} width={37} alt="filter-icon" />
          </button>
        </span>
        <b>0</b>
      </div>
    </div>
  );
}
