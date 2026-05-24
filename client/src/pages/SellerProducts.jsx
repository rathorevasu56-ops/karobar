import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SellerProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("sellerProducts")) || [];

    setProducts(savedProducts);
  }, []);

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(
      (item) => item._id !== id
    );

    setProducts(updatedProducts);

    localStorage.setItem(
      "sellerProducts",
      JSON.stringify(updatedProducts)
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Manage Products
        </h1>

        <Link
          to="/seller/add-product"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Add Product
        </Link>

      </div>

      {products.length === 0 ? (

        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-500">
            No Products Added
          </h2>
        </div>

      ) : (

        <div className="grid md:grid-cols-3 gap-6">

          {products.map((product) => (

            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-4">

                <h2 className="text-2xl font-bold">
                  {product.name}
                </h2>

                <p className="text-gray-600 mt-2">
                  ₹{product.price}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  {product.category}
                </p>

                <div className="flex gap-3 mt-5">

                  <button
                    onClick={() =>
                      deleteProduct(product._id)
                    }
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default SellerProducts;