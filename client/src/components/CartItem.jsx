import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import { formatPrice } from '../utils/formatPrice';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQty) => {
    if (newQty < 1) return;
    dispatch(updateQuantity({ product: item.product, size: item.size, quantity: newQty }));
  };

  return (
    <div className="flex items-center gap-4 border-b py-4">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
      <div className="flex-1">
        <h3 className="font-bold">{item.name}</h3>
        <p className="text-gray-600 text-sm">Size: {item.size}</p>
        <p className="text-blue-600 font-semibold">{formatPrice(item.price)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => handleQuantityChange(item.quantity - 1)} className="p-1 border rounded"><FiMinus size={16} /></button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button onClick={() => handleQuantityChange(item.quantity + 1)} className="p-1 border rounded"><FiPlus size={16} /></button>
      </div>
      <button onClick={() => dispatch(removeFromCart({ product: item.product, size: item.size }))} className="text-red-500"><FiTrash2 size={20} /></button>
    </div>
  );
};

export default CartItem;