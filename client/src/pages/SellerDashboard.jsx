import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { formatPrice } from '../utils/formatPrice';

const SellerDashboard = () => {
  const [stats, setStats] = useState({ totalProducts: 0, totalSales: 0, pendingOrders: 0, totalOrders: 0 });
  useEffect(() => { api.get('/seller/stats').then(res => setStats(res.data)); }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Seller Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow"><h3 className="text-gray-500">Total Products</h3><p className="text-3xl font-bold">{stats.totalProducts}</p></div>
        <div className="bg-white p-6 rounded-lg shadow"><h3 className="text-gray-500">Total Sales</h3><p className="text-3xl font-bold">{formatPrice(stats.totalSales)}</p></div>
        <div className="bg-white p-6 rounded-lg shadow"><h3 className="text-gray-500">Pending Orders</h3><p className="text-3xl font-bold">{stats.pendingOrders}</p></div>
        <div className="bg-white p-6 rounded-lg shadow"><h3 className="text-gray-500">Total Orders</h3><p className="text-3xl font-bold">{stats.totalOrders}</p></div>
      </div>
      <div className="flex gap-4"><Link to="/seller/products" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Manage Products</Link><Link to="/seller/add-product" className="bg-green-600 text-white px-4 py-2 rounded-lg">Add Product</Link></div>
    </div>
  );
};

export default SellerDashboard;