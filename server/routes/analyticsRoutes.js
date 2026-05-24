import express from 'express';

import {
  getSalesAnalytics,
  getProductAnalytics,
  getStats
} from '../controllers/analyticsController.js';

const router = express.Router();

router.get('/sales', getSalesAnalytics);

router.get('/products', getProductAnalytics);

router.get('/stats', getStats);

export default router;