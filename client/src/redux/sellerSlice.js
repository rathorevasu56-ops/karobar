import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

export const fetchSellerStats = createAsyncThunk('seller/stats', async () => {
  const res = await api.get('/seller/stats');
  return res.data;
});

const sellerSlice = createSlice({
  name: 'seller',
  initialState: { stats: { totalProducts: 0, totalSales: 0, pendingOrders: 0, totalOrders: 0 }, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSellerStats.fulfilled, (state, action) => { state.stats = action.payload; });
  }
});

export default sellerSlice.reducer;