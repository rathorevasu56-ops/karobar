import express from 'express';

import {
  register,
  login,
  verifyOTP,
  forgotPassword,
  resetPassword
} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);

router.post('/verify-otp', verifyOTP);

router.post('/login', login);

router.post('/forgot-password', forgotPassword);

router.post('/reset-password/:token', resetPassword);

export default router;