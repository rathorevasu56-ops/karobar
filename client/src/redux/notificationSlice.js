import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

export const fetchNotifications = createAsyncThunk('notifications/fetch', async () => {
  const res = await api.get('/notifications');
  return res.data;
});

export const markAsRead = createAsyncThunk('notifications/read', async (id, { dispatch }) => {
  await api.put(`/notifications/${id}/read`);
  dispatch(fetchNotifications());
});

export const markAllAsRead = createAsyncThunk('notifications/readAll', async (_, { dispatch }) => {
  await api.put('/notifications/read-all');
  dispatch(fetchNotifications());
});

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: { notifications: [], unreadCount: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload;
      state.unreadCount = action.payload.filter(n => !n.isRead).length;
    });
  }
});

export default notificationSlice.reducer;