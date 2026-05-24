import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

export const fetchSalesAnalytics = createAsyncThunk('analytics/sales', async () => {
  const res = await api.get('/analytics/sales');
  return res.data;
});

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState: { sales: { dailySales: {}, totalRevenue: 0, totalOrders: 0 }, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSalesAnalytics.fulfilled, (state, action) => { state.sales = action.payload; });
  }
});

export default analyticsSlice.reducer;