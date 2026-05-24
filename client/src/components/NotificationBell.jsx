import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaBell } from 'react-icons/fa';
import { fetchNotifications, markAsRead } from '../redux/notificationSlice';

const NotificationBell = () => {
  const { notifications, unreadCount } = useSelector(state => state.notifications);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { dispatch(fetchNotifications()); }, [dispatch]);

  const handleMarkRead = (id) => { dispatch(markAsRead(id)); };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="relative">
        <FaBell size={20} />
        {unreadCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">{unreadCount}</span>}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
          <div className="p-3 border-b font-bold">Notifications</div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? <p className="p-3 text-gray-500">No notifications</p> : notifications.map(n => (
              <div key={n._id} className={`p-3 border-b hover:bg-gray-50 cursor-pointer ${!n.isRead ? 'bg-blue-50' : ''}`} onClick={() => handleMarkRead(n._id)}>
                <p className="font-semibold">{n.title}</p>
                <p className="text-sm text-gray-600">{n.message}</p>
                <p className="text-xs text-gray-400 mt-1">{new Date(n.createdAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;