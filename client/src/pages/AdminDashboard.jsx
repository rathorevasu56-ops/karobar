import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { formatPrice } from '../utils/formatPrice';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ users: 0, products: 0, orders: 0, revenue: 0 });
  useEffect(() => { api.get('/admin/stats').then(res => setStats(res.data)); }, []);

  return (<div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1><div className="grid grid-cols-1 md:grid-cols-4 gap-6"><div className="bg-white p-6 rounded-lg shadow"><h3>Total Users</h3><p className="text-3xl font-bold">{stats.users}</p></div><div className="bg-white p-6 rounded-lg shadow"><h3>Products</h3><p className="text-3xl font-bold">{stats.products}</p></div><div className="bg-white p-6 rounded-lg shadow"><h3>Orders</h3><p className="text-3xl font-bold">{stats.orders}</p></div><div className="bg-white p-6 rounded-lg shadow"><h3>Revenue</h3><p className="text-3xl font-bold">{formatPrice(stats.revenue)}</p></div></div></div>);
};

export default AdminDashboard;