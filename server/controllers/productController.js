import Product from '../models/Product.js';

// GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Failed to fetch products'
    });
  }
};

// GET PRODUCT BY ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({
        message: 'Product not found',
      });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Server Error',
    });
  }
};

// CREATE PROduct 



export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      brand,
      category,
      price,
      countInStock,
      image
    } = req.body;

    const product = new Product({
      name,
      description,
      brand,
      category,
      price,
      countInStock,
      image: image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      user: '6841f1f1f1f1f1f1f1f1f1f1'
    });

    const createdProduct = await product.save();

    res.status(201).json(createdProduct);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
};

// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(product);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Failed to update product'
    });
  }
};

// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
      message: 'Product deleted'
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Failed to delete product'
    });
  }
};

// ADD REVIEW
export const addReview = async (req, res) => {
  try {
    res.json({
      message: 'Review added'
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Failed to add review'
    });
  }
};