import api from './api';

export const applyCoupon = async (code) => {
  const res = await api.post('/coupons/apply', { code });
  return res.data;
};

export const getCoupons = async () => {
  const res = await api.get('/coupons');
  return res.data;
};