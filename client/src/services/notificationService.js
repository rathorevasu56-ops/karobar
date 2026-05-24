import api from './api';

export const getNotifications = async () => {
  const res = await api.get('/notifications');
  return res.data;
};

export const markAsRead = async (id) => {
  await api.put(`/notifications/${id}/read`);
};

export const markAllAsRead = async () => {
  await api.put('/notifications/read-all');
};