import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: String,
    price: Number,
    quantity: Number,
    size: String,
    color: String,
    image: String,
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }],
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    phone: String,
  },
  paymentMethod: { type: String, required: true },
  paymentResult: { id: String, status: String, update_time: String, email_address: String },
  itemsPrice: { type: Number, required: true },
  taxPrice: { type: Number, required: true, default: 0.0 },
  shippingPrice: { type: Number, required: true, default: 0.0 },
  totalPrice: { type: Number, required: true },
  discountAmount: { type: Number, default: 0 },
  couponCode: String,
  status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
  trackingNumber: String,
  deliveredAt: Date,
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;