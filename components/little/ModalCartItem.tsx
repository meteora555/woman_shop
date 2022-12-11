import Image from 'next/image';
import { FC } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../store';

//Типизируем пропсы, и передаем в компонент, берем экшен на удаление предметов.

interface ModalCartItemProps {
  product: {
    imageUrl: string;
    name: string;
    price: string;
    id?: string;
  };
}

const ModalCartItem: FC<ModalCartItemProps> = ({ product }) => {
  const { cart } = useTypedSelector((state) => state);
  const { removeItemFromCart } = useActions();
  console.log(product.id);

  return (
    <div className="modalCart__item">
      <Image src={product.imageUrl} height={200} width={150} alt="modalCart-img" />
      <p>{product.name}</p>
      <p>{product.price}₽</p>
      <span>x</span>
      <i>1</i>
      <b>10000₽</b>
      <button onClick={() => removeItemFromCart({ id: product.id })}>
        <Image src="/content/icons/delete.png" height={27} width={27} alt="delete-icon" />
      </button>
    </div>
  );
};

export default ModalCartItem;
