import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { cartActions } from '../store/Slices/CartSlice';
import { filterActions } from '../store/Slices/FilterSlice';

//Создаем специальный хук, для вызова всех экшенов из одной функции, очень удобно использовать в дальнейшем.

const allActions = {
  ...cartActions,
  ...filterActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
