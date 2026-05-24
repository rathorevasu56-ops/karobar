export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) return;
  const permission = await Notification.requestPermission();
  return permission === 'granted';
};

export const sendBrowserNotification = (title, body, icon) => {
  if (Notification.permission === 'granted') {
    new Notification(title, { body, icon });
  }
};