import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useActions } from '../../hooks/useActions';

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
            <div onClick={() => removeItem(product.id)} className="basket__item-btns-delete">
              <CloseSquareFilled style={{ fontSize: '20px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
