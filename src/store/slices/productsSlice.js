import { createSlice } from '@reduxjs/toolkit';
import productsData from '../../data/products.json';

const initialState = {
  products: productsData,
  loading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = productsSlice.actions;
export default productsSlice.reducer;
