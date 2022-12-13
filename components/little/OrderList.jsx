import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OrderList = () => {
  return (
    <div className="order__list">
      <div className="order__item">
        <div className="order__item-image">
          <Image src="/content/order/order-1.jpg" height={600} width={375} alt="Order - 1" />
          <Link href={'/catalog/clothes'}>
            <h2>Лето 2022</h2>
          </Link>
        </div>
      </div>
      <div className="order__item">
        <div className="order__item-image">
          <Image src="/content/order/order-2.jpg" height={600} width={375} alt="Order - 1" />
          <Link href={'/catalog/clothes'}>
            <h2>Лето 2023</h2>
          </Link>
        </div>
      </div>
      <div className="order__item">
        <div className="order__item-image">
          <Image src="/content/order/order-3.jpg" height={600} width={375} alt="Order - 1" />
          <Link href={'/catalog/clothes'}>
            <h2>Весна 2023</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
