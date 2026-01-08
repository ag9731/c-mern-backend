const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Please enter the Product Name"],
    maxlength: [500, "Product Name cannot exceed 500 characters"],
  },

  productDescription: {
    type: String,
    required: [true, "Please enter the Product Description"],
    maxlength: [500, "Product Description cannot exceed 500 characters"],
  },

  productCategory: {
    type: String,
    required: [true, "Please enter the Product Category"],
    maxlength: [200, "Product Category cannot exceed 200 characters"],
  },

  productPrice: {
    type: Number,
    required: [true, "Please enter the Product Price"],
    min: [0, "Price cannot be negative"],
  },
});

module.exports = mongoose.model("Product", productSchema);
