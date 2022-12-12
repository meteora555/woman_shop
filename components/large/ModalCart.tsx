import React, { useRef, useState, useEffect } from 'react';

import { useTypedSelector } from '../../store';
import ModalCartItem from '../little/ModalCartItem';

const ModalCart: React.FC = () => {
  return (
    <div>
      <div className="modalCart__wraper">
        <div className="modalCart__items">
          {/* {cart.map((product) => (
            <ModalCartItem key={product.id} product={product} />
          ))} */}
        </div>
        <div className="total">
          <button className="modalCart__btn">ОФОРМИТЬ ЗАКАЗ</button>

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
};

export default ModalCart;
