const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

const CategoryController = require("../controllers/category");

router.post("/", checkAuth, CategoryController.createCategory);

router.get("/", CategoryController.getAllCategory);

module.exports = router;
