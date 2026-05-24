import React from 'react';
import { formatPrice } from '../utils/formatPrice';

const RevenueCard = ({ title, value, icon, change }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold">{formatPrice(value)}</p>
          {change && <p className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>{change >= 0 ? '+' : ''}{change}%</p>}
        </div>
        <div className="text-blue-600 text-2xl">{icon}</div>
      </div>
    </div>
  );
};

export default RevenueCard;