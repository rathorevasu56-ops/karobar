import React, { useEffect, useState } from "react";
import HeroBanner from "../components/HeroBanner";
import ProductCard from "../components/ProductCard";
import defaultProducts from "../data/products";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    // GET ADDED PRODUCTS
    const savedProducts =
  JSON.parse(localStorage.getItem("sellerProducts")) || [];
    // MERGE DEFAULT + NEW PRODUCTS
    setProducts([...defaultProducts, ...savedProducts]);

  }, []);

  // GET UNIQUE CATEGORIES
  const categories = [
    ...new Set(products.map((item) => item.category))
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      <HeroBanner />

      <div className="max-w-7xl mx-auto px-4 py-10">

        {categories.map((category) => (

          <div key={category} className="mb-14">

            <h2 className="text-3xl font-bold capitalize mb-6">
              {category}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {products
                .filter((item) => item.category === category)
                .map((product) => (

                  <ProductCard
                    key={product._id}
                    product={product}
                  />

                ))}

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}

export default Home;