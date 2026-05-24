import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import User from './models/User.js';

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const sampleProducts = [
  { name: "Men's Classic T-Shirt", description: "Comfortable cotton t-shirt", price: 499, discountPrice: 399, category: "mens", sizes: ["S","M","L","XL"], stock: 50, images: ["https://via.placeholder.com/500"], seller: "SELLER_ID_HERE" },
  // add more...
];

const seedDB = async () => {
  await Product.deleteMany();
  await Product.insertMany(sampleProducts);
  console.log("Database seeded!");
  process.exit();
};

seedDB();