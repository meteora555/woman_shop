import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 1,
  currentPage: 1,
  getId: 1,
  getParams: 'desc',
};

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.getParams = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const filterReducer = FilterSlice.reducer;
export const filterActions = FilterSlice.actions;
