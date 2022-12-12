import React from 'react';
import BasketItem from '../little/BasketItem';

import { useTypedSelector } from '../../store';

import { Scrollbars } from 'react-custom-scrollbars-2';

const ModalCart: React.FC = () => {
  const { cart } = useTypedSelector((state) => state);
  return (
    <div className="modal__wrapper">
      <div className="modal__content">
        <div className="basket">
          <div className="basket__wrapper">
            <div className="basket__list">
              <div className="basket__items">
                <Scrollbars autoHide={true}>
                  {cart.map((product) => (
                    <BasketItem key={product.id} product={product} />
                  ))}
                </Scrollbars>
              </div>
              <div className="basket__bottom">
                <div className="basket__quantity">
                  <div className="basket__quantity-title">КОЛИЧЕСТВО</div>
                  <div className="basket__quantity-value">10</div>
                </div>
                <div className="basket__total">
                  <div className="basket__total-title">ИТОГО</div>
                  <div className="basket__total-value">11 204 ₽</div>
                </div>
                <div className="basket__button">
                  <button>ОФОРМИТЬ ЗАКАЗ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
