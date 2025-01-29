//import { configureStore } from '@reduxjs/toolkit';
//import { cartReducer } from './cart.slice.js';

//const reducer = {
  //cart: cartReducer,
//};

//const store = configureStore({
 // reducer,
//});

//export default store;


// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
