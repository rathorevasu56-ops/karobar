export const downloadInvoice = (order) => {
  const invoiceHtml = `
    <html><head><title>Invoice #${order._id}</title></head>
    <body><h1>Karobar Invoice</h1><p>Order ID: ${order._id}</p><p>Date: ${new Date(order.createdAt).toLocaleDateString()}</p>
    <table border="1"><tr><th>Item</th><th>Qty</th><th>Price</th></tr>
    ${order.items.map(i => `<tr><td>${i.name}</td><td>${i.quantity}</td><td>₹${i.price * i.quantity}</td></tr>`).join('')}
    <tr><td colspan="2"><strong>Total</strong></td><td><strong>₹${order.totalPrice}</strong></td></tr></table></body></html>`;
  const blob = new Blob([invoiceHtml], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `invoice_${order._id}.html`;
  link.click();
};