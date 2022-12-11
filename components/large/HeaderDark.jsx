import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ModalAside from './ModalAside';

const Header = () => {
  const [visibleAside, setVisebleAside] = useState(false);

  const toogleVisibleAside = () => {
    setVisebleAside(!visibleAside);
  };

  return (
    <div className="header__dark">
      {visibleAside && <ModalAside />}
      <nav className="nav">
        <button className="header__burger-btn" onClick={toogleVisibleAside}>
          <Image src="/content/icons/burger_dark.svg" height={52} width={52} alt="burger-icon" />
        </button>
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
          <Link href={'/catalog'}>Женщинам</Link>
          <Link href={'/catalog'}>Мужчинам</Link>
          <Link href={'/about'}>Сотрудничество</Link>
          <Link href={'/about'}>8 (452) 123-456</Link>
        </div>
        <div className="header__buttons">
          <button className="header__buttons-auth">
            <Image src="/content/icons/auth-dark.svg" height={25} width={25} alt="auth-icon" />
          </button>
          <button className="header__buttons-search">
            <Image src="/content/icons/search-dark.svg" height={25} width={25} alt="search-icon" />
          </button>
          <button className="header__buttons-favorite">
            <Image
              src="/content/icons/favorite-dark.png"
              height={25}
              width={25}
              alt="favorite-icon"
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
