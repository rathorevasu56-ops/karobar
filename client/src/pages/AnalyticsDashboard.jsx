import React, { useEffect, useState } from 'react';
import api from '../services/api';
import SalesChart from '../components/SalesChart';
import RevenueCard from '../components/RevenueCard';
import { FaDollarSign, FaShoppingCart, FaUsers, FaBox } from 'react-icons/fa';

const AnalyticsDashboard = () => {
  const [sales, setSales] = useState({ dailySales: {}, totalRevenue: 0, totalOrders: 0 });
  const [stats, setStats] = useState({ products: 0, users: 0 });

  useEffect(() => {
    api.get('/analytics/sales').then(res => setSales(res.data));
    api.get('/analytics/stats').then(res => setStats(res.data));
  }, []);

  return (<div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1><div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"><RevenueCard title="Total Revenue" value={sales.totalRevenue} icon={<FaDollarSign />} /><RevenueCard title="Total Orders" value={sales.totalOrders} icon={<FaShoppingCart />} /><RevenueCard title="Total Users" value={stats.users} icon={<FaUsers />} /><RevenueCard title="Total Products" value={stats.products} icon={<FaBox />} /></div><div className="bg-white p-6 rounded-lg shadow"><h2 className="text-xl font-bold mb-4">Sales Trend (Last 30 Days)</h2><SalesChart data={sales.dailySales} /></div></div>);
};

export default AnalyticsDashboard;