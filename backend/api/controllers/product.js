const mongoose = require("mongoose");
const Product = require("../models/product");

exports.createProduct = (req, res, next) => {
  Product.find({ product_name: req.body.product_name })
    .exec()
    .then((product) => {
      const error = new Error();
      if (product.length > 0) {
        error.message = "Product Exists!";
        throw error;
      }
    })
    .then(() => {
      const product = createProduct(req.body);
      return product.save();
    })
    .then((result) => {
      return res.status(201).json({
        message: "Product created successfully!",
      });
    })
    .catch((error) => {
      next(error);
    });
};

exports.getAllProduct = (req, res, next) => {
  Product.find({})
    .exec()
    .then((result) => {
      if (result) {
        return res.status(200).json({
          producties: result,
          message: "Get All Producties Successful!",
        });
      }
      const error = new Error();
      error.message = "Failed!";
      throw error;
    })
    .catch((error) => {
      next(error);
    });
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.id;
  Product.find({ _id: productId })
    .exec()
    .then((result) => {
      if (result) {
        return res.status(200).json({
          product: result,
          message: "Get Product Successful!",
        });
      }
      const error = new Error();
      error.message = "Failed!";
      throw error;
    })
    .catch((error) => {
      next(error);
    });
};

exports.deleteProduct = (req, res, next) => {
  const id = req.params.id;
  Product.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Product Deleted Successfully!",
      });
    })
    .catch((error) => {
      error.message = "Could Not Delete Product!";
      next(error);
    });
};

function createProduct({
  product_name,
  category_id,
  quantity_per_unit,
  unit_price,
  units_in_stock,
  units_on_order,
  reorder_level,
  discontinued,
  images,
}) {
  return new Product({
    _id: new mongoose.Types.ObjectId(),
    product_name: product_name,
    category_id: category_id,
    quantity_per_unit: quantity_per_unit,
    unit_price: unit_price,
    units_in_stock: units_in_stock,
    units_on_order: units_on_order,
    reorder_level: reorder_level,
    discontinued: discontinued,
    images: images,
  });
}
