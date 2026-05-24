import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

export const fetchOrders = createAsyncThunk('orders/fetch', async () => {
  const res = await api.get('/orders');
  return res.data;
});

const orderSlice = createSlice({
  name: 'orders',
  initialState: { orders: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => { state.loading = true; });
    builder.addCase(fetchOrders.fulfilled, (state, action) => { state.loading = false; state.orders = action.payload; });
  }
});

export default orderSlice.reducer;