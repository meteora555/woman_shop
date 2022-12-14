import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Iproduct, CartSliceState } from '../product/product.type';
import { totalCalc } from '../../hooks/totalCalc';

// Создаем наш главный слайс для хранения всех карточек товаров в корзине, описываем начальный стейт, а также общую стоимость, формулу записал в хуках, в нашем слайсе 4 основных метода для работы, добавить и удалить товар, увеличеть или уменьшить штуки.

// также добавил метод для очистки корзины на будущее мб понадобиться, если будет время сверстать кнопку.
const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // сначала создаем переменную, где будем хранить массив из наших карточек, по id добавляем, и добавляем наш счетчик, если его нет то пушим стейт и добавляем новое свойство счетчика по умол "1"
    addItemToCart: (state, action: PayloadAction<Iproduct>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = totalCalc(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = totalCalc(state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = totalCalc(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },

    // removeItemFromCart: (state, action: PayloadAction<{ id: string | undefined }>) => {
    //   return state.items.filter((el) => el.id !== action.payload.id);
    // },

    // increment: (state, action: PayloadAction<number>) => {
    //   state.count
    // },
    // decrement: (state, action: PayloadAction<number>) => {
    //   if (state.count > 1) {
    //     state.count -= action.payload;
    //   }
    // },
  },
});

export const cartReducer = CartSlice.reducer;
export const cartActions = CartSlice.actions;
