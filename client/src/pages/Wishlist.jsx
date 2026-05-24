import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {

    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(savedWishlist);

  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-10">
        My Wishlist
      </h1>

      {wishlist.length === 0 ? (

        <div className="text-center mt-20">

          <h2 className="text-3xl text-gray-500">
            Wishlist is Empty
          </h2>

        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {wishlist.map((product, index) => (

            <ProductCard
              key={product._id || index}
              product={product}
            />

          ))}

        </div>

      )}

    </div>
  );
};

export default Wishlist;