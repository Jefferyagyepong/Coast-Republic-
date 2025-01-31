import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@redux/cart.slice.js';

const reducer = {
 cart: cartReducer,
};

const store = configureStore({
 reducer,
});

export default store;



