import Notification from '../models/Notification.js';

export const sendNotification = async (userId, title, message, type, link) => {
  await Notification.create({ user: userId, title, message, type, link });
};