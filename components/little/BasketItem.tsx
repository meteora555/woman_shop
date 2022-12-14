import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../store';
import {
  PlusSquareFilled,
  MinusSquareFilled,
  HeartFilled,
  CloseSquareFilled,
} from '@ant-design/icons';

//Типизируем пропсы, и передаем в компонент, берем экшен на удаление предметов.

interface ModalCartItemProps {
  product: {
    id: string;
    imageUrl: string;
    name: string;
    price: string;
    category?: string;
    count: number;
  };
}

const BasketItem: FC<ModalCartItemProps> = ({ product }) => {
  const { addItemToCart, minusItem, removeItem } = useActions();
  const currentPrice = Number(product.price) * product.count;
  console.log(product);

  return (
    <div className="basket__item">
      <div className="basket__item-image">
        <Link href={'/catalog/clothes'}>
          <Image src={product.imageUrl} height={133} width={100} alt="basket__item-img" />
        </Link>
      </div>
      <div className="basket__item-info">
        <div className="basket__item-top">
          <div className="basket__item-left">
            <div className="basket__item-title">{product.name}</div>
            <div className="basket__item-desc">80% Полиэстер 20% Вискоза</div>
          </div>
          <div className="basket__item-right">
            <div className="basket__item-price">{product.price}₽</div>
          </div>
        </div>
        <div className="basket__item-bottom">
          <div className="basket__item-actions">
            <div className="count">
              <div
                onClick={() => {
                  if (product.count > 1) {
                    minusItem(product.id);
                  }
                }}
                className="count__minus">
                <MinusSquareFilled style={{ fontSize: '20px' }} />
              </div>
              <div className="count__value">{product.count}</div>
              <div onClick={() => addItemToCart(product)} className="count__plus">
                <PlusSquareFilled style={{ fontSize: '20px' }} />
              </div>
            </div>
            <div className="basket__item-total">{currentPrice}</div>
          </div>
          <div className="basket__item-btns">
            <div className="basket__item-btns-favorite">
              <HeartFilled style={{ fontSize: '20px' }} />
            </div>
            <div
              // onClick={() => removeItemFromCart({ id: product.id })}
              className="basket__item-btns-delete">
              <CloseSquareFilled style={{ fontSize: '20px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="modalCart__item">
    //   <Image src={product.imageUrl} height={200} width={150} alt="modalCart-img" />
    //   <p>{product.name}</p>
    //   <p>{product.price}₽</p>
    //   <span>x</span>
    //   <i>1</i>
    //   <b>10000₽</b>
    //   <button onClick={() => removeItemFromCart({ id: product.id })}>
    //     <Image src="/content/icons/delete.png" height={27} width={27} alt="delete-icon" />
    //   </button>
    // </div>
  );
};

export default BasketItem;
