import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, addProduct } from "./operations";

const initialState = {
  users: {
    items: [],
    isLoading: false,
    error: null
  },

}

const productsSlice = createSlice({
    name: 'products',
    initialState,

    extraReducers: {
    [fetchProducts.pending](state){
      state.isLoading = true;
    },
    [fetchProducts.fulfilled](state, action){
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    },
      [fetchProducts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      },
       [addProduct.pending](state) {
      state.isLoading = true;
    },
       [addProduct.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.products.push(action.payload);
    },
    [addProduct.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});


export const productsReducer = productsSlice.reducer;