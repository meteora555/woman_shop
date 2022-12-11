import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { cartActions } from '../store/Slices/CartSlice';

//Создаем специальный хук, для вызова всех экшенов из одной функции, очень удобно использовать в дальнейшем.

const allActions = {
  ...cartActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
