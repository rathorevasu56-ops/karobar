import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import User from '../models/User.js';
const router = express.Router();

router.get('/profile', protect, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json(user);
});

router.put('/profile', async (req, res) => {
  const user = await User.findById(req.user._id);
  user.name = req.body.name || user.name;
  user.phone = req.body.phone || user.phone;
  user.address = req.body.address || user.address;
  await user.save();
  res.json(user);
});

export default router;