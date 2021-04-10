const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product_name: {
    type: String,
    required: true,
    unique: true,
  },
  category_id: {
    type: String,
    required: true,
  },
  quantity_per_unit: {
    type: String,
    required: true,
  },
  unit_price: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  units_in_stock: {
    type: Number,
    required: true,
  },
  units_on_order: {
    type: Number,
  },
  reorder_level: {
    type: Number,
  },
  discontinued: {
    type: Boolean,
  },
  images: {
    type: Array,
    default: [],
  },
});

// Getter
// productSchema.path("unit_price").get(function (num) {
//   return (num / 100).toFixed(2);
// });

// // Setter
// productSchema.path("unit_price").set(function (num) {
//   return num * 100;
// });

module.exports = mongoose.model("Product", productSchema);
