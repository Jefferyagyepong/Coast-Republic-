import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@/cart.slice.js';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});