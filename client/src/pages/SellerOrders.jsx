import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { formatPrice } from '../utils/formatPrice';

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => { api.get('/seller/orders').then(res => setOrders(res.data)); }, []);

  const updateStatus = async (orderId, status) => { await api.put(`/orders/${orderId}/status`, { status }); setOrders(orders.map(o => o._id === orderId ? { ...o, status } : o)); };

  return (<div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-6">Seller Orders</h1><div className="space-y-4">{orders.map(order => (<div key={order._id} className="bg-white p-4 rounded-lg shadow"><div className="flex justify-between items-center"><span className="font-bold">Order #{order._id.slice(-6)}</span><select value={order.status} onChange={(e) => updateStatus(order._id, e.target.value)} className="border p-1 rounded">{['pending','processing','shipped','delivered','cancelled'].map(s => (<option key={s}>{s}</option>))}</select></div><p>Customer: {order.user?.name}</p><p>Total: {formatPrice(order.totalPrice)}</p><div className="mt-2">{order.items.map(item => (<div key={item._id} className="flex gap-2 text-sm"><img src={item.image} className="w-12 h-12 object-cover" /><div>{item.name} x{item.quantity}</div></div>))}</div></div>))}</div></div>);
};

export default SellerOrders;