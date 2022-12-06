import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  shortName: string;
  cartImage: string;
  price: number;
  quantity: number;
}

export type CartSlice = {
  items: CartItem[];
  total: number;
};

const initialState: CartSlice = {
  items: [],
  total: 0,
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const addedItem = action.payload;
      const currentItem = state.items.find((item) => item.id === addedItem.id);
      state.total += addedItem.quantity;
    },
  },
});
