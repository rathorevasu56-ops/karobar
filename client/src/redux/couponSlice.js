import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

export const applyCoupon = createAsyncThunk('coupon/apply', async (code) => {
  const res = await api.post('/coupons/apply', { code });
  return res.data;
});

const couponSlice = createSlice({
  name: 'coupon',
  initialState: { appliedCoupon: null, discount: 0, error: null },
  reducers: { clearCoupon: (state) => { state.appliedCoupon = null; state.discount = 0; } },
  extraReducers: (builder) => {
    builder.addCase(applyCoupon.fulfilled, (state, action) => { state.appliedCoupon = action.payload.coupon; state.discount = action.payload.discount; state.error = null; });
    builder.addCase(applyCoupon.rejected, (state) => { state.error = 'Invalid coupon'; });
  }
});

export const { clearCoupon } = couponSlice.actions;
export default couponSlice.reducer;