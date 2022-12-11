import Image from 'next/image';
import { FC } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../store';

//описываем пропсы, в котором целый обьект с опр свойствами, через useAction вызываем экшен на добавление в корзину, и сам стейт корзины, в поля прокидываем данные из пропсов, дополнительно реализуем фичу на кнопки добавить и если добавлено уже в корзине, и больше добавить нельзя
interface CatalogItemProps {
  product: {
    imageUrl: string;
    name: string;
    price: string;
    id?: string;
  };
}

const CatalogItem: FC<CatalogItemProps> = ({ product }) => {
  const { addItemToCart } = useActions();

  const { cart } = useTypedSelector((state: any) => state);

  const isHaveInCart = cart.some((el: any) => el.id === product.id);

  return (
    <div className="catalogItem">
      <Image src={product.imageUrl} height={300} width={450} alt="burger-icon" />
      <h5 className="catalogItem-title">{product.name}</h5>
      <p className="catalogItem-text">80% Полиэстер 20% Вискоза</p>
      <span>
        <p className="catalogItem-price">{product.price} ₽</p>
        <button onClick={() => !isHaveInCart && addItemToCart(product)}>
          {isHaveInCart ? 'в корзине' : 'добавить'}
        </button>
        {/* <PlusCircleFilled /> */}
      </span>
    </div>
  );
};

export default CatalogItem;
