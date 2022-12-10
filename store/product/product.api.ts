import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Iproduct } from './product.type';
// Создаем простой api для получения всех продуктов, вещей, описываем его путь, базовый url откуда мы получаем, и ендпойнты, также указываем тип в build.query который мы ожидаем получить, ставим по умолчанию лимит в 8 продуктов
export const productApi = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://632346ad362b0d4e7de066f9.mockapi.io/' }),
  endpoints: (build) => ({
    getProducts: build.query<Iproduct[], number>({
      query: (limit = 8) => `products?limit=${limit}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
