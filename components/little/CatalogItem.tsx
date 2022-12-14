import React, { useMemo, FC } from 'react';

import Image from 'next/image';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../store';

import { PlusCircleFilled, CheckOutlined } from '@ant-design/icons';
import { message, Tooltip } from 'antd';

//описываем пропсы, в котором целый обьект с опр свойствами, через useAction вызываем экшен на добавление в корзину, и сам стейт корзины, в поля прокидываем данные из пропсов, дополнительно реализуем фичу на кнопки добавить и если добавлено уже в корзине, и больше добавить нельзя
interface CatalogItemProps {
  product: {
    id: string;
    imageUrl: string;
    name: string;
    price: string;
    category?: string;
    count: number;
  };
}

const CatalogItem: FC<CatalogItemProps> = ({ product }) => {
  const { addItemToCart } = useActions();

  const { cart } = useTypedSelector((state: any) => state);
  const isHaveInCart = cart.items.some((el: any) => el.id === product.id);
  const messagesCart = ['Добавить в корзину', 'Добавлено в корзину'];

  const [messageApi, contextHolder] = message.useMessage();
  const btnHandlerSuccess = () => {
    messageApi.open({
      type: 'success',
      content: 'Товар добавлен в корзину',
    });
    !isHaveInCart && addItemToCart(product);
  };
  const btnHandlerError = () => {
    messageApi.open({
      type: 'error',
      content: 'Товар уже добавлен',
    });
  };

  return (
    <>
      {contextHolder}
      <div className="catalogItem">
        <Image src={product.imageUrl} height={330} width={350} alt="catalog-img" />
        <div className="catalogItem__title">
          <h5>{product.name}</h5>
        </div>
        <p className="catalogItem-text">80% Полиэстер 20% Вискоза</p>
        <span>
          <p className="catalogItem-price">{product.price} ₽</p>
          <Tooltip title={isHaveInCart ? messagesCart[1] : messagesCart[0]}>
            <button onClick={!isHaveInCart ? btnHandlerSuccess : btnHandlerError}>
              {isHaveInCart ? <CheckOutlined /> : <PlusCircleFilled />}
            </button>
          </Tooltip>
        </span>
      </div>
    </>
  );
};

export default CatalogItem;
