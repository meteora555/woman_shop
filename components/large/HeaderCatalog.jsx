import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="header__catalog">
      <nav className="nav">
        <Link href={'/'}>
          <div className="header__logo">
            <Image src="/content/icons/logo-dark.png" height={67} width={67} alt="logo-icon" />
            <span>
              <h4 className="header__logo-title title-dark">ANTONETTI</h4>
              <p className="header__logo-desc desc-dark">сеть магазинов женской одежды</p>
            </span>
          </div>
        </Link>
        <div className="header__inner inner-dark">
          <Link href={'/catalog'}>НОВИНКИ</Link>
          <Link href={'/catalog'}>SALE</Link>
          <Link href={'/about'}>ОДЕЖДА</Link>
          <Link href={'/about'}>АКСЕССУАРЫ</Link>
        </div>
        <div className="header__buttons">
          <button className="header__buttons-auth">
            <Image src="/content/icons/auth-dark.svg" height={25} width={25} alt="auth-icon" />
          </button>
          <button className="header__buttons-favorite">
            <Image
              src="/content/icons/favorite-dark.png"
              height={25}
              width={25}
              alt="favorite-icon"
            />
          </button>
          <button className="header__buttons-auth">
            <Image src="/content/icons/auth-dark.svg" height={25} width={25} alt="auth-icon" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
