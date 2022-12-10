import Image from 'next/image';

export default function CatalogItem({ image }) {
  console.log(image);
  return (
    <div className="catalogItem">
      <Image src={image} height={300} width={450} alt="burger-icon" />
      <h5 className="catalogItem-title">брюки зауженные лавандового цвета</h5>
      <p className="catalogItem-text">80% Полиэстер 20% Вискоза</p>
      <span>
        <p className="catalogItem-price">6090 ₽</p>
        <button>добавить</button>
      </span>
    </div>
  );
}
