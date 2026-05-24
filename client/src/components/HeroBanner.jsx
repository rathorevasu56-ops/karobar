import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (<div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"><div className="container mx-auto px-4 text-center"><h1 className="text-5xl font-bold mb-4">Summer Sale 2025</h1><p className="text-xl mb-8">Up to 50% off on selected items</p><Link to="/search?q=summer" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Shop Now</Link></div></div>);
};

export default HeroBanner;