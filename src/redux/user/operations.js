import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://646cd7087b42c06c3b2c1daf.mockapi.io/api/v1/';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/products', );
        return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/products', credentials);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

