import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaShoppingCart, FaChartLine, FaCoupon } from 'react-icons/fa';

const SellerSidebar = () => {
  const links = [
    { to: '/seller', icon: FaTachometerAlt, label: 'Dashboard' },
    { to: '/seller/products', icon: FaBox, label: 'Products' },
    { to: '/seller/orders', icon: FaShoppingCart, label: 'Orders' },
    { to: '/seller/analytics', icon: FaChartLine, label: 'Analytics' },
    { to: '/seller/coupons', icon: FaCoupon, label: 'Coupons' },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-16">
      <div className="p-4">
        {links.map(link => (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg mb-2 ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
            <link.icon /> {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SellerSidebar;