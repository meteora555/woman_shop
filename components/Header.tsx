import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import { url } from 'inspector';
import Image from 'next/image';

const Header = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="header">
      <nav className="nav">
        <button className="header__burger-btn">
          <Image src="/content/icons/burger.svg" height={52} width={52} alt="burger-icon" />
        </button>
        <div className="header__logo">
          <Image src="/content/icons/logo.svg" height={67} width={67} alt="logo-icon" />
          <span>
            <h4 className="header__logo-title">ANTONETTI</h4>
            <p className="header__logo-desc">сеть магазинов женской одежды</p>
          </span>
        </div>
        <div className="header__inner">
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
