import api from './api';

export const getSalesAnalytics = async () => {
  const res = await api.get('/analytics/sales');
  return res.data;
};

export const getProductAnalytics = async () => {
  const res = await api.get('/analytics/products');
  return res.data;
};