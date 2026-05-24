import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const cartItems =
    useSelector((state) => state.cart.cartItems) || [];

  const placeOrderHandler = () => {
    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrders = cartItems.map((item) => ({
      ...item,
      orderId:
        Date.now() + Math.random().toString(36),
      status: "Order Placed",
      orderedAt: new Date().toLocaleString(),
    }));

    const updatedOrders = [
      ...existingOrders,
      ...newOrders,
    ];

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    alert("Order Placed Successfully!");

    navigate("/orders");
  };

  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + item.price * (item.qty || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* SHIPPING */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg">

          <h1 className="text-4xl font-bold mb-8">
            Checkout
          </h1>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Address"
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="City"
              className="w-full border p-4 rounded-xl"
            />

            <select className="w-full border p-4 rounded-xl">
              <option>Cash On Delivery</option>
              <option>UPI Payment</option>
            </select>

          </div>

        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white p-8 rounded-2xl shadow-lg h-fit">

          <h2 className="text-3xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">

            {cartItems.map((item, index) => (
              <div
                key={item._id || index}
                className="flex items-center gap-4 border-b pb-4"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div className="flex-1">

                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p className="text-gray-600">
                    Qty: {item.qty || 1}
                  </p>

                </div>

                <div className="font-bold text-blue-600">
                  ₹
                  {item.price *
                    (item.qty || 1)}
                </div>

              </div>
            ))}

          </div>

          {/* TOTAL */}
          <div className="mt-8 border-t pt-6">

            <div className="flex justify-between text-xl font-bold">

              <span>Total</span>

              <span>₹{totalPrice}</span>

            </div>

            <button
              onClick={placeOrderHandler}
              className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-bold transition"
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Checkout;