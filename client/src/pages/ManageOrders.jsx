import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { formatPrice } from '../utils/formatPrice';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => { api.get('/admin/orders').then(res => setOrders(res.data)); }, []);

  const updateStatus = async (id, status) => { await api.put(`/admin/orders/${id}/status`, { status }); setOrders(orders.map(o => o._id === id ? { ...o, status } : o)); };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Orders</h1>
      <div className="space-y-4">
        {orders.map(order => (<div key={order._id} className="bg-white p-4 rounded-lg shadow"><div className="flex justify-between"><span className="font-bold">Order #{order._id.slice(-6)}</span><select value={order.status} onChange={(e) => updateStatus(order._id, e.target.value)} className="border rounded p-1">{['pending','processing','shipped','delivered','cancelled'].map(s => <option key={s}>{s}</option>)}</select></div><p>User: {order.user?.name}</p><p>Total: {formatPrice(order.totalPrice)}</p></div>))}
      </div>
    </div>
  );
};

export default ManageOrders;