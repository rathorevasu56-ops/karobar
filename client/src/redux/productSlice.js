import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

export const fetchProducts = createAsyncThunk('products/fetch', async ({ page, limit, category, search }) => {
  const res = await api.get(`/products?page=${page}&limit=${limit}&category=${category}&search=${search}`);
  return res.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: { products: [], loading: false, page: 1, pages: 1, total: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => { state.loading = true; });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
      state.page = action.payload.page;
      state.pages = action.payload.pages;
      state.total = action.payload.total;
    });
  }
});

export default productSlice.reducer;