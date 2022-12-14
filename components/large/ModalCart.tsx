import React from 'react';
import BasketItem from '../little/BasketItem';

import { useTypedSelector } from '../../store';

import { Scrollbars } from 'react-custom-scrollbars-2';

// С помощью хука из ртк, достаем из стейта нужные нам параметры, и отправляем их в разметку, общую стоимость и с помощью легка вычисляем общее количество вещей.

//используем скролбарс, для создания красивого скрола в корзине.

const ModalCart: React.FC = () => {
  const { cart } = useTypedSelector((state) => state);
  const totalPrice = useTypedSelector((state) => state.cart.totalPrice);

  const currentItems = useTypedSelector((state) => state.cart.items);
  const totalCount = currentItems.reduce((sum: number, item: any) => sum + item.count, 0);

  return (
    <div className="modal__wrapper">
      <div className="modal__content">
        <div className="basket">
          <div className="basket__wrapper">
            <div className="basket__list">
              <div className="basket__items">
                <Scrollbars autoHide={true}>
                  {cart.items.map((product) => (
                    <BasketItem key={product.id} product={product} />
                  ))}
                </Scrollbars>
              </div>
              <div className="basket__bottom">
                <div className="basket__quantity">
                  <div className="basket__quantity-title">КОЛИЧЕСТВО</div>
                  <div className="basket__quantity-value">{totalCount}</div>
                </div>
                <div className="basket__total">
                  <div className="basket__total-title">ИТОГО</div>
                  <div className="basket__total-value">{totalPrice} ₽</div>
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
