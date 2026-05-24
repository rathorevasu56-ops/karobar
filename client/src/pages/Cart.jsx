import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  removeFromCart,
} from "../redux/cartSlice";

import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems =
    useSelector((state) => state.cart.cartItems) || [];

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <div className="space-y-6">

          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-6 border p-4 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded"
              />

              <div className="flex-1">
                <h2 className="text-xl font-bold">
                  {item.name}
                </h2>

                <p className="text-blue-600">
                  ₹{item.price}
                </p>
              </div>

              <button
                onClick={() => removeHandler(item._id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <Link
            to="/checkout"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Place Order
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;