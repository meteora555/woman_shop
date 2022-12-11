import React, { useRef, useState, useEffect } from 'react';

import { useTypedSelector } from '../../store';
import ModalCartItem from '../little/ModalCartItem';

export default function ModalCart({ open }) {
  console.log('props open have', open);
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

  return (
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
  );
}
