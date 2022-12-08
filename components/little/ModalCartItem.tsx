import Image from 'next/image';

export default function ModalCartItem() {
  return (
    <div className="modalCart__item">
      <Image src="/content/catalog/bruki-1.png" height={200} width={150} alt="modalCart-img" />
      <h5>Брюки зауженные светлого цвета</h5>
      <b>6090₽</b>
      <span>x</span>
      <i>1</i>
      <b>10000₽</b>
      <button>
        <Image src="/content/icons/delete.png" height={27} width={27} alt="delete-icon" />
      </button>
    </div>
  );
}
