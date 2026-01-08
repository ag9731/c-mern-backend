const Product = require("../models/productSchema");

// Create Product
exports.createNewProduct = async (req, res, next) => {
  try {
    const { productName, productDescription, productCategory, productPrice } =
      req.body;

    const newProduct = new Product({
      productName,
      productDescription,
      productCategory,
      productPrice,
    });

    newProduct.save();

    res.status(200).json({
      message: "Product Created Successfully",
      newProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Product creation failed",
      error: error.message,
    });
  }
};

exports.getAllProducts = (req, res, next) => {
  res.status(200).json({
    message: "Route working fine",
  });
};
