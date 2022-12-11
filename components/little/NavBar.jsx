import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

import listenForOutsideClick from '../../services/outsideClick';
import { useTypedSelector } from '../../store/index';

import ModalCartItem from '../little/ModalCartItem';

//Использована библиотека на клик вне области, все равно работает криво надо будет отрефакторить, и разобраться.

export default function NavBar() {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

  const { cart } = useTypedSelector((state) => state);

  return (
    <div className="bar">
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
      <div
        onClick={() => {
          console.log('push the btn');
          setIsOpen(true);
        }}
        className="bar__cart">
        <button className="cart__btn">
          <Image src="/content/icons/cart-btn.png" height={37} width={37} alt="filter-icon" />
        </button>
        <b>0</b>
      </div>
      <div ref={menuRef} className={isOpen ? 'modalCart' : 'modalCartHide '}>
        <div className="modalCart__wraper">
          <div onClick={toggle} className="modalCart__btn">
            <button>закрыть</button>
            <h2>Корзина</h2>
          </div>

          <div className="modalCart__items">
            {cart.map((product) => (
              <ModalCartItem key={product.id} product={product} />
            ))}
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
    </div>
  );
}
