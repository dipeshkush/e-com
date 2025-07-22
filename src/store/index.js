import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice.js';
import cartReducer from './slices/cartSlice.js';
import filtersReducer from './slices/filtersSlice.js';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    filters: filtersReducer,
  },
});
