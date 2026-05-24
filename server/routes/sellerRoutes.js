import express from 'express';

import {
  getSellerStats,
  getSellerOrders,
  getSellerProducts,
  requestToBecomeSeller
} from '../controllers/sellerController.js';

const router = express.Router();

router.get('/stats', getSellerStats);

router.get('/orders', getSellerOrders);

router.get('/products', getSellerProducts);

router.post('/request', requestToBecomeSeller);

export default router;