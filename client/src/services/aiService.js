import api from './api';

export const chatWithAI = async (message) => {
  const res = await api.post('/ai/chat', { message });
  return res.data;
};

export const getRecommendations = async (productId) => {
  const res = await api.get(`/ai/recommendations/${productId}`);
  return res.data;
};