import { configureStore, ConfigureStoreOptions, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { productApi } from './product/product.api';
import { cartReducer } from './Slices/CartSlice';
import { filterReducer } from './Slices/FilterSlice';

//Создаем стандартный стор, подключаем к нему все редюсеры, и наш productApi со всеми querry хуками

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: {
      [productApi.reducerPath]: productApi.reducer,
      cart: cartReducer,
      filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
  });
export const store = createStore();

//типизируем наши хуки, взято из документации
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
