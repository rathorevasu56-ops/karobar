import express from 'express';
import { createCoupon, getCoupons, applyCoupon } from '../controllers/couponController.js';
import { protect } from '../middleware/authMiddleware.js';
import { admin } from '../middleware/adminMiddleware.js';
const router = express.Router();

router.get('/', protect, getCoupons);
router.post('/apply', protect, applyCoupon);
router.post('/', protect, admin, createCoupon);

export default router;