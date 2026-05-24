import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const DeliveryTracking = () => {
  const { orderId } = useParams();
  const [tracking, setTracking] = useState(null);
  useEffect(() => { api.get(`/orders/${orderId}/tracking`).then(res => setTracking(res.data)); }, [orderId]);

  if (!tracking) return <div className="container mx-auto p-8">Loading...</div>;

  const steps = ['ordered', 'processing', 'shipped', 'delivered'];
  const currentStep = steps.indexOf(tracking.status);

  return (<div className="container mx-auto px-4 py-8"><h1 className="text-2xl font-bold mb-6">Track Order #{orderId}</h1><div className="flex justify-between items-center"><div className="relative flex-1"><div className="flex justify-between">{steps.map((step, idx) => (<div key={step} className={`text-center ${idx <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}><div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${idx <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>{idx+1}</div><div className="text-sm mt-1 capitalize">{step}</div></div>))}</div><div className="absolute top-4 left-0 w-full h-0.5 bg-gray-300 -z-10"><div className="h-full bg-blue-600 transition-all" style={{width: `${(currentStep / (steps.length-1)) * 100}%`}}></div></div></div></div>{tracking.trackingNumber && <div className="mt-8 p-4 bg-gray-100 rounded"><p>Tracking Number: {tracking.trackingNumber}</p></div>}</div>);
};

export default DeliveryTracking;