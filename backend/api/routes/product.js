const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

const ProductController = require("../controllers/product");

router.post("/", checkAuth, ProductController.createProduct);

router.get("/", ProductController.getAllProduct);

router.get("/:id", ProductController.getProduct);

router.delete("/:id", checkAuth, ProductController.deleteProduct);

module.exports = router;
