import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTypedSelector } from '../../store';
import ModalCart from './ModalCart';

import { Badge, Drawer, DrawerProps, Space } from 'antd';
const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
  const showCart = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // Получем сначала массив с обьектами, где каждый обьект это карточка товара, затем пробегаем по нему редюсом и схлопываем обьекты, причем каждой свойство счетчика сумирует в аргумент

  const currentItems = useTypedSelector((state) => state.cart.items);
  const totalCount = currentItems.reduce((sum: number, item: any) => sum + item.count, 0);

  return (
    <div className="header__catalog">
      <Drawer
        title="Корзина"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        extra={
          <Space>
            <button className="modalCart__btn" onClick={onClose}>
              закрыть
            </button>
          </Space>
        }
        width="550px">
        <ModalCart />
      </Drawer>
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
          <Link href={'/catalog/clothes'}>НОВИНКИ</Link>
          <Link href={'/catalog/clothes'}>SALE</Link>
          <Link href={'/catalog/clothes'}>ОДЕЖДА</Link>
          <Link href={'/catalog/accessories'}>АКСЕССУАРЫ</Link>
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
          <Badge count={totalCount} offset={[1, 10]} size="default">
            <button onClick={showCart} className="header__buttons-cart">
              <Image src="/content/icons/cart-btn.png" height={25} width={25} alt="cart-icon" />
            </button>
          </Badge>
        </div>
      </nav>
    </div>
  );
};

export default Header;
