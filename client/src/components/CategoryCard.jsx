import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category, image, count }) => {
  return (
    <Link to={`/search?category=${category}`} className="group">
      <div className="relative overflow-hidden rounded-lg">
        <img src={image} alt={category} className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
          <h3 className="text-xl font-bold uppercase">{category}</h3>
          <p className="text-sm">{count} products</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;