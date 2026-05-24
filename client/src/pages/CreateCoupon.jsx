import React, { useState } from 'react';
import api from '../services/api';
import toast from 'react-hot-toast';

const CreateCoupon = () => {
  const [form, setForm] = useState({ code: '', discountType: 'percentage', discountValue: '', minOrderAmount: 0, validFrom: '', validUntil: '', usageLimit: 1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { await api.post('/coupons', form); toast.success('Coupon created'); setForm({ code: '', discountType: 'percentage', discountValue: '', minOrderAmount: 0, validFrom: '', validUntil: '', usageLimit: 1 }); } catch (err) { toast.error('Error'); }
  };

  return (<div className="container mx-auto px-4 py-8 max-w-2xl"><h1 className="text-3xl font-bold mb-6">Create Coupon</h1><form onSubmit={handleSubmit} className="space-y-4"><input type="text" placeholder="Coupon Code" value={form.code} onChange={e => setForm({...form, code: e.target.value})} className="w-full border p-2 rounded" required /><select value={form.discountType} onChange={e => setForm({...form, discountType: e.target.value})} className="w-full border p-2 rounded"><option value="percentage">Percentage</option><option value="fixed">Fixed Amount</option></select><input type="number" placeholder="Discount Value" value={form.discountValue} onChange={e => setForm({...form, discountValue: e.target.value})} className="w-full border p-2 rounded" required /><input type="number" placeholder="Min Order Amount" value={form.minOrderAmount} onChange={e => setForm({...form, minOrderAmount: e.target.value})} className="w-full border p-2 rounded" /><input type="datetime-local" value={form.validFrom} onChange={e => setForm({...form, validFrom: e.target.value})} className="w-full border p-2 rounded" required /><input type="datetime-local" value={form.validUntil} onChange={e => setForm({...form, validUntil: e.target.value})} className="w-full border p-2 rounded" required /><button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg">Create Coupon</button></form></div>);
};

export default CreateCoupon;