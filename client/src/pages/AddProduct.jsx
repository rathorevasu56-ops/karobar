import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] =
    useState("clothes");

  const [description, setDescription] =
    useState("");

  const [image, setImage] = useState("");

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const submitHandler = (e) => {

    e.preventDefault();

    const newProduct = {
      _id: Date.now().toString(),
      name,
      price,
      category,
      description,
      image,
    };

    const oldProducts =
      JSON.parse(
        localStorage.getItem("sellerProducts")
      ) || [];

    const updatedProducts = [
      ...oldProducts,
      newProduct,
    ];

    localStorage.setItem(
      "sellerProducts",
      JSON.stringify(updatedProducts)
    );

    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Add Product
      </h1>

      <form
        onSubmit={submitHandler}
        className="space-y-5 bg-white p-6 rounded-xl shadow-lg"
      >

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full border p-4 rounded-lg"
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
          className="w-full border p-4 rounded-lg"
          required
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="w-full border p-4 rounded-lg"
        >

          <option value="clothes">
            Clothes
          </option>

          <option value="electronics">
            Electronics
          </option>

          <option value="shoes">
            Shoes
          </option>

          <option value="beauty">
            Beauty
          </option>

        </select>

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full border p-4 rounded-lg h-32"
        />

        <input
          type="file"
          onChange={handleImage}
          className="w-full"
        />

        {image && (
          <img
            src={image}
            alt=""
            className="w-40 h-40 object-cover rounded-lg"
          />
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-xl"
        >
          Add Product
        </button>

      </form>

    </div>
  );
};

export default AddProduct;