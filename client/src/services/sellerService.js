import api from './api';

export const getSellerStats = async () => {
  const res = await api.get('/seller/stats');
  return res.data;
};

export const getSellerOrders = async () => {
  const res = await api.get('/seller/orders');
  return res.data;
};

export const getSellerProducts = async () => {
  const res = await api.get('/seller/products');
  return res.data;
};

export const requestSeller = async () => {
  const res = await api.post('/seller/request');
  return res.data;
};