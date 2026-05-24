import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../services/api';
import toast from 'react-hot-toast';

const UserProfile = () => {
  const { user } = useSelector(state => state.auth);
  const [profile, setProfile] = useState({ name: '', email: '', phone: '', address: {} });
  useEffect(() => { api.get('/users/profile').then(res => setProfile(res.data)); }, []);

  const handleSubmit = async (e) => { e.preventDefault(); try { await api.put('/users/profile', profile); toast.success('Profile updated'); } catch (err) { toast.error('Update failed'); } };

  return (<div className="container mx-auto px-4 py-8 max-w-2xl"><h1 className="text-3xl font-bold mb-6">Profile</h1><form onSubmit={handleSubmit}><div className="mb-4"><label>Name</label><input type="text" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} className="w-full border p-2 rounded" /></div><div className="mb-4"><label>Email</label><input type="email" value={profile.email} readOnly className="w-full border p-2 rounded bg-gray-100" /></div><div className="mb-4"><label>Phone</label><input type="text" value={profile.phone || ''} onChange={e => setProfile({...profile, phone: e.target.value})} className="w-full border p-2 rounded" /></div><button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg">Update Profile</button></form></div>);
};

export default UserProfile;