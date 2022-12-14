import React, { useState } from 'react';

import { MenuUnfoldOutlined, CloseSquareFilled } from '@ant-design/icons';
import { Drawer, Space } from 'antd';
import type { DrawerProps } from 'antd';
import { useActions } from '../../hooks/useActions';

const categoryList = [
  'Джинсы',
  'Футболки',
  'Блузы',
  'Юбки',
  'Свитшоты',
  'Топы и майки',
  'Платья',
  'Брюки',
];

const CatalogFilter: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');
  const showBurger = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const { setCategoryId } = useActions();

  const [category, setCategory] = useState(1);

  const onChangeCategory = (i: any) => {
    setCategory(i);
    setCategoryId(i);
  };

  return (
    <>
      <div className="catalog__filter">
        <h2>Категории</h2>
        <ul className="catalog__filter-list">
          {categoryList.map((item, i) => (
            <li className="catalog__filter-item" key={i}>
              <button
                onClick={() => onChangeCategory(i + 1)}
                className={
                  category === i + 1 ? 'catalog__btn catalog__btn-active' : ' catalog__btn'
                }>
                {item}
              </button>
            </li>
          ))}
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
            {categoryList.map((item, i) => (
              <li className="catalog__filter-item" key={i}>
                <button
                  onClick={() => onChangeCategory(i + 1)}
                  className={
                    category === i + 1 ? 'catalog__btn catalog__btn-active' : ' catalog__btn'
                  }>
                  {item}
                </button>
              </li>
            ))}
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
