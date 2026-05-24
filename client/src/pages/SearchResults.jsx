import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../services/api';
import ProductCard from '../components/ProductCard';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';
  const [products, setProducts] = useState([]);

  useEffect(() => { api.get(`/products?search=${query}&category=${category}`).then(res => setProducts(res.data.products)); }, [query, category]);

  return (<div className="container mx-auto px-4 py-8"><h1 className="text-2xl font-bold mb-6">Search Results for "{query || category}"</h1>{products.length === 0 ? <p>No products found.</p> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{products.map(p => <ProductCard key={p._id} product={p} />)}</div>}</div>);
};

export default SearchResults;