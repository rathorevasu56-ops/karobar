import express from 'express';
import User from '../models/User.js';
import Product from '../models/Product.js';
import Order from '../models/Order.js';

const router = express.Router();

router.get('/stats', async (req, res) => {
  const users = await User.countDocuments();

  const products = await Product.countDocuments();

  const orders = await Order.countDocuments();

  const revenue = await Order.aggregate([
    { $match: { status: 'delivered' } },
    {
      $group: {
        _id: null,
        total: { $sum: '$totalPrice' }
      }
    }
  ]);

  res.json({
    users,
    products,
    orders,
    revenue: revenue[0]?.total || 0
  });
});

export default router;