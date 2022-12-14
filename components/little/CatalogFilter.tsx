import React, { useState } from 'react';
import { MenuUnfoldOutlined, CloseSquareFilled } from '@ant-design/icons';
import { Select, Drawer, Space } from 'antd';
import type { DrawerProps } from 'antd';

const CatalogFilter: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');
  const showBurger = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="catalog__filter">
        <h2>Категории</h2>
        <ul className="catalog__filter-list">
          <li className="catalog__filter-item">
            <button className="catalog__btn catalog__btn-active">Джинсы</button>
          </li>
          <li className="catalog__filter-item">
            <button className="catalog__btn">Футболки</button>
          </li>
          <li className="catalog__filter-item">
            <button className="catalog__btn">Блузы</button>
          </li>
          <li className="catalog__filter-item">
            <button className="catalog__btn">Юбки</button>
          </li>
          <li className="catalog__filter-item">
            <button className="catalog__btn">Свитшоты</button>
          </li>
          <li className="catalog__filter-item">
            <button className="catalog__btn">Топы и майки</button>
          </li>
          <li className="catalog__filter-item">
            <button className="catalog__btn">Платья</button>
          </li>
          <li className="catalog__filter-item">
            <button className="catalog__btn">Брюки</button>
          </li>
        </ul>
      </div>
      <div className="filter__mobile">
        <Drawer
          title="Категории"
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
          width="60%"
          extra={
            <Space>
              <button className="mobile__btn" onClick={onClose}>
                <CloseSquareFilled style={{ fontSize: '20px' }} />
              </button>
            </Space>
          }>
          <ul className="catalog__filter-list">
            <li className="catalog__filter-item">
              <button className="catalog__btn catalog__btn-active">Джинсы</button>
            </li>
            <li className="catalog__filter-item">
              <button className="catalog__btn">Футболки</button>
            </li>
            <li className="catalog__filter-item">
              <button className="catalog__btn">Блузы</button>
            </li>
            <li className="catalog__filter-item">
              <button className="catalog__btn">Юбки</button>
            </li>
            <li className="catalog__filter-item">
              <button className="catalog__btn">Свитшоты</button>
            </li>
            <li className="catalog__filter-item">
              <button className="catalog__btn">Топы и майки</button>
            </li>
            <li className="catalog__filter-item">
              <button className="catalog__btn">Платья</button>
            </li>
            <li className="catalog__filter-item">
              <button className="catalog__btn">Брюки</button>
            </li>
          </ul>
        </Drawer>
        <button onClick={showBurger}>
          <MenuUnfoldOutlined style={{ fontSize: '30px' }} />
        </button>
      </div>
    </>
  );
};

export default CatalogFilter;
