import Order from '../models/Order.js';
import { generateInvoicePDF } from '../utils/generateInvoice.js';

export const downloadInvoice = async (req, res) => {
  const order = await Order.findById(req.params.orderId).populate('user items.product');
  if (!order) return res.status(404).json({ message: 'Order not found' });
  const pdf = await generateInvoicePDF(order);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=invoice_${order._id}.pdf`);
  res.send(pdf);
};