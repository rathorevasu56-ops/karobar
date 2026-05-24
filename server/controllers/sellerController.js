import Order from '../models/Order.js';
import Product from '../models/Product.js';
import User from '../models/User.js';

export const getSellerStats = async (req, res) => {
  const sellerId = req.user._id;
  const totalProducts = await Product.countDocuments({ seller: sellerId });
  const orders = await Order.find({ 'items.seller': sellerId });
  const totalSales = orders.reduce((sum, order) => sum + order.totalPrice, 0);
  const pendingOrders = orders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length;
  res.json({ totalProducts, totalSales, pendingOrders, totalOrders: orders.length });
};

export const getSellerOrders = async (req, res) => {
  const orders = await Order.find({ 'items.seller': req.user._id }).populate('user');
  res.json(orders);
};

export const getSellerProducts = async (req, res) => {
  const products = await Product.find({ seller: req.user._id });
  res.json(products);
};

export const requestToBecomeSeller = async (req, res) => {
  const user = await User.findById(req.user._id);
  user.sellerRequestStatus = 'pending';
  await user.save();
  res.json({ message: 'Seller request submitted' });
};