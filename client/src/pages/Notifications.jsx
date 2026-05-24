import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotifications, markAllAsRead } from '../redux/notificationSlice';

const Notifications = () => {
  const { notifications } = useSelector(state => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchNotifications()); }, [dispatch]);

  return (<div className="container mx-auto px-4 py-8"><div className="flex justify-between items-center mb-6"><h1 className="text-3xl font-bold">Notifications</h1><button onClick={() => dispatch(markAllAsRead())} className="text-blue-600">Mark all as read</button></div><div className="space-y-3">{notifications.length === 0 ? <p>No notifications</p> : notifications.map(n => (<div key={n._id} className={`p-4 rounded-lg shadow ${!n.isRead ? 'bg-blue-50' : 'bg-white'}`}><h3 className="font-bold">{n.title}</h3><p>{n.message}</p><p className="text-xs text-gray-500 mt-2">{new Date(n.createdAt).toLocaleString()}</p></div>))}</div></div>);
};

export default Notifications;