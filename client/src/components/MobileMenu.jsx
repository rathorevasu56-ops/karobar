import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const MobileMenu = ({ isOpen, onClose, user, onLogout }) => {
  if (!isOpen) return null;
  return (<div className="fixed inset-0 bg-white z-50 p-4"><button onClick={onClose} className="absolute top-4 right-4"><FaTimes size={24} /></button><div className="flex flex-col space-y-4 mt-12"><Link to="/" onClick={onClose}>Home</Link><Link to="/search?category=mens" onClick={onClose}>Men</Link><Link to="/search?category=womens" onClick={onClose}>Women</Link>{user ? (<><Link to="/profile" onClick={onClose}>Profile</Link><Link to="/orders" onClick={onClose}>Orders</Link><button onClick={() => { onLogout(); onClose(); }}>Logout</button></>) : (<Link to="/login" onClick={onClose}>Login</Link>)}</div></div>);
};

export default MobileMenu;