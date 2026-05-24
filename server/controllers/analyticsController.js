import Order from '../models/Order.js';
import Product from '../models/Product.js';
import User from '../models/User.js';

export const getSalesAnalytics = async (req, res) => {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const orders = await Order.find({ createdAt: { $gte: thirtyDaysAgo }, status: 'delivered' });
  const dailySales = {};
  orders.forEach(order => {
    const date = order.createdAt.toISOString().split('T')[0];
    dailySales[date] = (dailySales[date] || 0) + order.totalPrice;
  });
  const totalRevenue = orders.reduce((sum, o) => sum + o.totalPrice, 0);
  res.json({ dailySales, totalRevenue, totalOrders: orders.length });
};

export const getProductAnalytics = async (req, res) => {
  const topProducts = await Order.aggregate([
    { $unwind: '$items' },
    { $group: { _id: '$items.product', totalSold: { $sum: '$items.quantity' }, totalRevenue: { $sum: { $multiply: ['$items.price', '$items.quantity'] } } } },
    { $sort: { totalSold: -1 } },
    { $limit: 10 },
    { $lookup: { from: 'products', localField: '_id', foreignField: '_id', as: 'product' } },
    { $unwind: '$product' }
  ]);
  res.json(topProducts);
};

export const getStats = async (req, res) => {
  const users = await User.countDocuments();
  const products = await Product.countDocuments();
  res.json({ users, products });
};