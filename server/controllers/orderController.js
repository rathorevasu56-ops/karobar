import Order from '../models/Order.js';
import Product from '../models/Product.js';
import Notification from '../models/Notification.js';

export const createOrder = async (req, res) => {
  const { items, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice, couponCode, discountAmount } = req.body;
  const order = new Order({
    user: req.user._id,
    items,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    couponCode,
    discountAmount
  });
  const createdOrder = await order.save();
  for (const item of items) {
    await Product.findByIdAndUpdate(item.product, { $inc: { stock: -item.quantity } });
    await Notification.create({
      user: item.seller,
      title: 'New Order',
      message: `You have a new order for ${item.name} (x${item.quantity})`,
      type: 'order',
      link: `/seller/orders/${createdOrder._id}`
    });
  }
  res.status(201).json(createdOrder);
};

export const getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate('items.product');
  res.json(orders);
};

export const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email').populate('items.product');
  if (!order) return res.status(404).json({ message: 'Order not found' });
  if (order.user._id.toString() !== req.user._id.toString() && req.user.role !== 'admin' && req.user.role !== 'seller')
    return res.status(403).json({ message: 'Not authorized' });
  res.json(order);
};

export const updateOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ message: 'Order not found' });
  order.status = req.body.status;
  if (req.body.status === 'delivered') order.deliveredAt = Date.now();
  if (req.body.trackingNumber) order.trackingNumber = req.body.trackingNumber;
  await order.save();
  await Notification.create({
    user: order.user,
    title: `Order ${order.status}`,
    message: `Your order #${order._id} is now ${order.status}`,
    type: 'order',
    link: `/orders/${order._id}`
  });
  res.json(order);
};