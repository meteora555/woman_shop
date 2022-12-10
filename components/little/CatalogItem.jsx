import Image from 'next/image';

export default function CatalogItem({ image, name, price }) {
  // console.log(price);
  return (
    <div className="catalogItem">
      <Image src={image} height={300} width={450} alt="burger-icon" />
      <h5 className="catalogItem-title">{name}</h5>
      <p className="catalogItem-text">80% Полиэстер 20% Вискоза</p>
      <span>
        <p className="catalogItem-price">{price} ₽</p>
        <button>добавить</button>
      </span>
    </div>
  );
}
