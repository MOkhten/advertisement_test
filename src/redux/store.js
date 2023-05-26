import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from './user/userSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});