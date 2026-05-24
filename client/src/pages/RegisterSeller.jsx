import React, { useState } from 'react';
import api from '../services/api';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const RegisterSeller = () => {
  const { user } = useSelector(state => state.auth);
  const [loading, setLoading] = useState(false);

  const handleRequest = async () => {
    setLoading(true);
    try { await api.post('/seller/request'); toast.success('Seller request submitted'); } catch (err) { toast.error('Failed'); } finally { setLoading(false); }
  };

  if (user?.role === 'seller') return <div className="text-center py-10">You are already a seller.</div>;
  if (user?.sellerRequestStatus === 'pending') return <div className="text-center py-10">Your request is pending approval.</div>;

  return (<div className="min-h-screen flex items-center justify-center"><div className="bg-white p-8 rounded-lg shadow-md w-96 text-center"><h2 className="text-2xl font-bold mb-4">Become a Seller</h2><p className="mb-6">Sell your products on Karobar and reach thousands of customers.</p><button onClick={handleRequest} disabled={loading} className="bg-blue-600 text-white px-6 py-2 rounded-lg">{loading ? 'Submitting...' : 'Request to become seller'}</button></div></div>);
};

export default RegisterSeller;