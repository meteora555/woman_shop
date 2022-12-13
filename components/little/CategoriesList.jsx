import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CategoriesList = () => {
  return (
    <div className="category__list">
      <div className="category__item">
        <div className="category__item-image">
          <Image src="/content/order/category_1.jpg" height={600} width={375} alt="Order - 1" />
          <Link href={'/catalog/clothes'}>
            <h2>Осень</h2>
          </Link>
        </div>
      </div>
      <div className="category__item">
        <div className="category__item-image">
          <Image src="/content/order/category_5.jpg" height={600} width={375} alt="Order - 1" />
          <Link href={'/catalog/clothes'}>
            <h2>Лето</h2>
          </Link>
        </div>
      </div>
      <div className="category__item">
        <div className="category__item-image">
          <Image src="/content/order/category_2.jpg" height={620} width={375} alt="Order - 1" />
          <Link href={'/catalog/clothes'}>
            <h2>Блузы</h2>
          </Link>
        </div>
      </div>
      <div className="category__item">
        <div className="category__item-image">
          <Image src="/content/order/category_3.jpg" height={600} width={375} alt="Order - 1" />
          <Link href={'/catalog/clothes'}>
            <h2>Джинсы</h2>
          </Link>
        </div>
      </div>
      <div className="category__item">
        <div className="category__item-image">
          <Image src="/content/order/category_4.jpg" height={600} width={375} alt="Order - 1" />
          <Link href={'/catalog/clothes'}>
            <h2>Юбки</h2>
          </Link>
        </div>
      </div>

      <div className="category__item">
        <div className="category__item-image">
          <Image src="/content/order/category_6.jpg" height={600} width={375} alt="Order - 1" />
          <Link href={'/catalog/clothes'}>
            <h2>Свитшоты</h2>
          </Link>
        </div>
      </div>
      {/* <Image src="/content/order/col2022.jpg" height={510} width={375} alt="Cat - 1" />
      <Image src="/content/order/category_3.jpg" height={510} width={375} alt="Cat - 2" />
      <Image src="/content/order/category_5.jpg" height={510} width={375} alt="Cat - 3" />
      <Image src="/content/order/category_4.jpg" height={510} width={375} alt="Cat - 4" />
      <Image src="/content/order/category_2.jpg" height={510} width={375} alt="Cat - 5" />
      <Image src="/content/order/category_6.jpg" height={510} width={375} alt="Cat - 6" /> */}
    </div>
  );
};
export default CategoriesList;
