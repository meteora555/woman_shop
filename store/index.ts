import { configureStore, ConfigureStoreOptions, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { productApi } from './product/product.api';

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: { [productApi.reducerPath]: productApi.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
  });
export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
