import ModalCartItem from '../little/ModalCartItem';

export default function ModalCart() {
  return (
    <div className="modalCart">
      <div className="modalCart__wrapper">
        <div className="modalCart__btn">
          <button>закрыть</button>
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
  );
}
