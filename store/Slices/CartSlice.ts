import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Iproduct } from '../product/product.type';

export type CartSlice = {
  items: Iproduct[];
  total?: number;
};

const initialState: Iproduct[] = [];

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Iproduct>) => {
      state.push(action.payload);
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string | undefined }>) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});

export const cartReducer = CartSlice.reducer;
export const cartActions = CartSlice.actions;
