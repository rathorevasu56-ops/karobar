import mongoose from 'mongoose';

const notificationSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: { type: String, enum: ['order', 'promotion', 'system', 'message'], default: 'system' },
  isRead: { type: Boolean, default: false },
  link: String,
}, { timestamps: true });

const Notification = mongoose.model('Notification', notificationSchema);
export default Notification;