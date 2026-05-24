import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300">

      {/* CLICKABLE IMAGE */}
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover hover:scale-105 transition duration-300"
        />
      </Link>

      {/* PRODUCT DETAILS */}
      <div className="p-4">

        <h2 className="text-xl font-bold mb-2">
          {product.name}
        </h2>

        <p className="text-gray-500 text-sm mb-2 capitalize">
          {product.category}
        </p>

        <p className="text-gray-700 mb-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between">

          <span className="text-2xl font-bold text-blue-600">
            ₹{product.price}
          </span>

          {/* BUTTON */}
          <Link
            to={`/product/${product._id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            View Details
          </Link>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;