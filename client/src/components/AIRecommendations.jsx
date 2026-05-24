import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ProductCard from './ProductCard';

const AIRecommendations = ({ productId }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    api.get(`/ai/recommendations/${productId}`).then(res => setRecommendations(res.data));
  }, [productId]);

  if (recommendations.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map(p => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  );
};

export default AIRecommendations;