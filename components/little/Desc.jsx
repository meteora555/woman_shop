import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Desc = () => {
  return (
    <div className="main__desc">
      <h2 className="main__desc-title">ANTONETTI</h2>
      <p className="main__desc-text">российский бренд женской одежды</p>
      <Link href={'/catalog/clothes'}>
        <button className="main__desc-btn">ПЕРЕЙТИ В КАТАЛОГ</button>
      </Link>
      <button className="main__desc-ring">
        <Link href={'/catalog/clothes'}>
          <Image src="/content/icons/ring.png" height={80} width={80} alt="ring-icon" />
        </Link>
      </button>
    </div>
  );
};
