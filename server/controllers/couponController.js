import Coupon from '../models/Coupon.js';

export const createCoupon = async (req, res) => {
  const coupon = new Coupon(req.body);
  const created = await coupon.save();
  res.status(201).json(created);
};

export const getCoupons = async (req, res) => {
  const coupons = await Coupon.find({ isActive: true });
  res.json(coupons);
};

export const applyCoupon = async (req, res) => {
  const { code, amount } = req.body;
  const coupon = await Coupon.findOne({ code: code.toUpperCase(), isActive: true, validFrom: { $lte: Date.now() }, validUntil: { $gte: Date.now() } });
  if (!coupon) return res.status(404).json({ message: 'Invalid or expired coupon' });
  if (amount < coupon.minOrderAmount) return res.status(400).json({ message: `Minimum order amount ₹${coupon.minOrderAmount} required` });
  let discount = coupon.discountType === 'percentage' ? (amount * coupon.discountValue) / 100 : coupon.discountValue;
  if (coupon.maxDiscount && discount > coupon.maxDiscount) discount = coupon.maxDiscount;
  res.json({ discount, coupon });
};