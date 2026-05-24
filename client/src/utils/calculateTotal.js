export const calculateCartTotal = (cartItems) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const shipping = subtotal > 500 ? 0 : 50;
  return { subtotal, tax, shipping, total: subtotal + tax + shipping };
};