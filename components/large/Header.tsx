import React, { useState, useRef } from 'react';
import Link from 'next/link';

import Image from 'next/image';
import ModalAside from './ModalAside';
import { Desc } from '../little/Desc';

const Header = (): JSX.Element => {
  const [visibleAside, setVisebleAside] = useState(false);
  const asideRef = useRef();
  const toogleVisibleAside = () => {
    setVisebleAside(!visibleAside);
  };
  const OutsideClickAside = (e: any) => {
    if (!e.path.includes(asideRef.current)) {
      setVisebleAside(false);
    }
  };

  return (
    <div className="header">
      <Desc />
      {visibleAside && <ModalAside />}

      <nav className="nav">
        <button className="header__burger-btn " onClick={toogleVisibleAside}>
          <Image src="/content/icons/burger.svg" height={52} width={52} alt="burger-icon" />
        </button>
        <div className="header__logo">
          <Image src="/content/icons/logo.svg" height={67} width={67} alt="logo-icon" />
          <span>
            <h4 className="header__logo-title">ANTONETTI</h4>
            <p className="header__logo-desc">сеть магазинов женской одежды</p>
          </span>
        </div>
        <div className="header__inner ">
          <Link href={'/catalog'}>Женщинам</Link>
          <Link href={'/catalog'}>Мужчинам</Link>
          <Link href={'/about'}>Сотрудничество</Link>
          <Link href={'/about'}>8 (452) 123-456</Link>
        </div>
        <div className="header__buttons">
          <button className="header__buttons-auth">
            <Image src="/content/icons/auth.svg" height={25} width={25} alt="auth-icon" />
          </button>
          <button className="header__buttons-search">
            <Image src="/content/icons/search.svg" height={25} width={25} alt="search-icon" />
          </button>
          <button className="header__buttons-favorite">
            <Image src="/content/icons/favorite.png" height={25} width={25} alt="favorite-icon" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
