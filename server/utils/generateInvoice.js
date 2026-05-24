import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

export const generateInvoicePDF = (order) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const buffers = [];
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => resolve(Buffer.concat(buffers)));
    doc.fontSize(20).text('Karobar Invoice', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Order ID: ${order._id}`);
    doc.text(`Date: ${new Date(order.createdAt).toLocaleDateString()}`);
    doc.text(`Customer: ${order.user.name}`);
    doc.moveDown();
    doc.text('Items:', { underline: true });
    order.items.forEach(item => {
      doc.text(`${item.name} x${item.quantity} - ₹${item.price * item.quantity}`);
    });
    doc.moveDown();
    doc.text(`Total: ₹${order.totalPrice}`, { bold: true });
    doc.end();
  });
};