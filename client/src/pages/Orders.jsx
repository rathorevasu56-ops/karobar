import React, { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  const cancelOrder = (id) => {
    const updatedOrders = orders.filter(
      (item) => item._id !== id
    );

    setOrders(updatedOrders);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">

          <div>
            <h1 className="text-4xl font-bold">
              My Orders
            </h1>

            <p className="text-gray-600 mt-2">
              Track and manage your purchases
            </p>
          </div>

          <div className="bg-blue-600 text-white px-5 py-3 rounded-xl shadow">
            Total Orders: {orders.length}
          </div>

        </div>

        {/* EMPTY */}
        {orders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="empty"
              className="w-40 mx-auto mb-6"
            />

            <h2 className="text-3xl font-bold mb-4">
              No Orders Yet
            </h2>

            <p className="text-gray-600">
              Your placed orders will appear here.
            </p>

          </div>
        ) : (

          <div className="space-y-8">

            {orders.map((item, index) => (

              <div
                key={item._id || index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >

                <div className="grid md:grid-cols-4 gap-6 p-6">

                  {/* IMAGE */}
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-52 object-cover rounded-xl"
                    />
                  </div>

                  {/* DETAILS */}
                  <div className="md:col-span-2">

                    <div className="flex items-center gap-3 mb-3">

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Order Placed
                      </span>

                      <span className="text-gray-500 text-sm">
                        #{Math.floor(
                          Math.random() * 100000
                        )}
                      </span>

                    </div>

                    <h2 className="text-2xl font-bold mb-2">
                      {item.name}
                    </h2>

                    <p className="text-gray-600 mb-4">
                      Premium quality product with fast delivery
                      and secure packaging.
                    </p>

                    <div className="flex flex-wrap gap-6 text-sm">

                      <div>
                        <span className="font-semibold">
                          Quantity:
                        </span>{" "}
                        {item.qty || 1}
                      </div>

                      <div>
                        <span className="font-semibold">
                          Price:
                        </span>{" "}
                        ₹{item.price}
                      </div>

                      <div>
                        <span className="font-semibold">
                          Ordered On:
                        </span>{" "}
                        {new Date().toLocaleDateString()}
                      </div>

                    </div>

                  </div>

                  {/* ACTIONS */}
                  <div className="flex flex-col justify-between">

                    <div>

                      <h3 className="text-3xl font-bold text-blue-600">
                        ₹{item.price * (item.qty || 1)}
                      </h3>

                      <p className="text-gray-500 mt-2">
                        Total Amount
                      </p>

                    </div>

                    <div className="space-y-3 mt-6">

                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                        Track Order
                      </button>

                      <button
                        onClick={() =>
                          cancelOrder(item._id)
                        }
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
                      >
                        Cancel Order
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Orders;