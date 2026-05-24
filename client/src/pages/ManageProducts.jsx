import React, { useEffect, useState } from "react";

const ManageProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    // LOAD PRODUCTS
    const savedProducts =
      JSON.parse(localStorage.getItem("products"));

    console.log(savedProducts);

    if (savedProducts) {
      setProducts(savedProducts);
    }

  }, []);

  // DELETE PRODUCT
  const handleDelete = (id) => {

    const updatedProducts =
      products.filter(
        (item) => item._id !== id
      );

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold mb-8">
        Manage Products
      </h1>

      {products.length === 0 ? (

        <h2 className="text-2xl text-red-500">
          No Products Found
        </h2>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {products.map((product) => (

            <div
              key={product._id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
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
                  {product.description}
                </p>

                <p className="text-blue-600 text-xl font-bold mt-3">
                  ₹{product.price}
                </p>

                <p className="capitalize mt-2">
                  {product.category}
                </p>

                <button
                  onClick={() =>
                    handleDelete(product._id)
                  }
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg w-full"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default ManageProducts;