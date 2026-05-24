import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/cartSlice";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);

  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");

  const [selectedImage, setSelectedImage] = useState("");

  const [reviews, setReviews] = useState([
    {
      name: "Rahul",
      text: "Amazing quality product 🔥",
    },
    {
      name: "Priya",
      text: "Very comfortable and stylish.",
    },
  ]);

  const product = products.find(
    (p) => p._id.toString() === id
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    if (product) {
      setSelectedImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="text-center text-3xl mt-20">
        Product Not Found
      </div>
    );
  }

  const addCartHandler = () => {
    dispatch(
      addToCart({
        ...product,
        qty,
      })
    );

    alert("Added To Cart");
  };

  const buyNowHandler = () => {
    dispatch(
      addToCart({
        ...product,
        qty,
      })
    );

    window.location.href = "/cart";
  };

  const submitReview = (e) => {
    e.preventDefault();

    if (!reviewName || !reviewText) return;

    setReviews([
      ...reviews,
      {
        name: reviewName,
        text: reviewText,
      },
    ]);

    setReviewName("");
    setReviewText("");
  };

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* IMAGE SECTION */}
        <div className="sticky top-20">

          {/* MAIN IMAGE */}
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
          />

          {/* SMALL IMAGES */}
          <div className="flex gap-4 mt-4">

            <img
              src={product.image}
              alt=""
              onClick={() => setSelectedImage(product.image)}
              className="w-24 h-24 object-cover rounded-lg border cursor-pointer hover:scale-105 transition"
            />

            <img
              src={product.image}
              alt=""
              onClick={() => setSelectedImage(product.image)}
              className="w-24 h-24 object-cover rounded-lg border cursor-pointer hover:scale-105 transition"
            />

            <img
              src={product.image}
              alt=""
              onClick={() => setSelectedImage(product.image)}
              className="w-24 h-24 object-cover rounded-lg border cursor-pointer hover:scale-105 transition"
            />

          </div>

        </div>

        {/* PRODUCT DETAILS */}
        <div>

          <h1 className="text-5xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-4xl text-blue-600 font-bold mb-5">
            ₹{product.price}
          </p>

          {/* RATING */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-yellow-500 text-2xl">
              ★★★★☆
            </span>

            <span className="text-gray-600 text-lg">
              4.5 Ratings (120 Reviews)
            </span>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">
              Description
            </h2>

            <p className="text-gray-700 leading-8 text-lg">
              {product.description}
            </p>
          </div>

          {/* FEATURES */}
          <div className="mb-6">

            <h2 className="text-2xl font-bold mb-3">
              Features
            </h2>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Premium Quality Material</li>
              <li>✔ Comfortable For Daily Wear</li>
              <li>✔ Trendy Modern Design</li>
              <li>✔ Lightweight & Durable</li>
            </ul>

          </div>

          {/* SIZE */}
          <div className="mb-6">

            <h3 className="font-bold text-xl mb-3">
              Select Size
            </h3>

            <div className="flex gap-3">

              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="border px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}

            </div>

          </div>

          {/* QUANTITY */}
          <div className="mb-8">

            <h3 className="font-bold text-xl mb-3">
              Quantity
            </h3>

            <select
              value={qty}
              onChange={(e) =>
                setQty(Number(e.target.value))
              }
              className="border px-4 py-3 rounded-lg"
            >
              {[1, 2, 3, 4, 5].map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">


            <button
  onClick={() => {

    const oldWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const alreadyExists = oldWishlist.find(
      (item) => item._id === product._id
    );

    if (alreadyExists) return;

    localStorage.setItem(
      "wishlist",
      JSON.stringify([
        ...oldWishlist,
        product,
      ])
    );

    alert("Added To Wishlist");

  }}
  className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700"
>
  Wishlist
</button>
            <button
              onClick={addCartHandler}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition text-lg"
            >
              Add To Cart
            </button>

            <button
              onClick={buyNowHandler}
              className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition text-lg"
            >
              Buy Now
            </button>

          </div>

        </div>
      </div>

      {/* REVIEWS */}
      <div className="mt-20">

        <h2 className="text-4xl font-bold mb-8">
          Customer Reviews
        </h2>

        <div className="space-y-5">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="border rounded-xl p-5 bg-gray-50 shadow-sm"
            >
              <h3 className="font-bold text-lg">
                {review.name}
              </h3>

              <p className="text-gray-700 mt-2">
                {review.text}
              </p>
            </div>
          ))}

        </div>

        {/* REVIEW FORM */}
        <div className="mt-12">

          <h3 className="text-3xl font-bold mb-5">
            Write a Review
          </h3>

          <form
            onSubmit={submitReview}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Your Name"
              value={reviewName}
              onChange={(e) =>
                setReviewName(e.target.value)
              }
              className="w-full border p-4 rounded-xl"
            />

            <textarea
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) =>
                setReviewText(e.target.value)
              }
              className="w-full border p-4 rounded-xl h-36"
            />

            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-xl"
            >
              Submit Review
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;