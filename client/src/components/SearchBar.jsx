import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => { e.preventDefault(); if (query.trim()) navigate(`/search?q=${query}`); };
  return (<form onSubmit={handleSubmit} className="relative"><input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} className="border rounded-full py-1 px-4 w-48 focus:w-64 transition-all duration-300" /><button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2"><FaSearch /></button></form>);
};

export default SearchBar;