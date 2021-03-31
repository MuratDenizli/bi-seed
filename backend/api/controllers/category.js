const mongoose = require("mongoose");
const Category = require("../models/category");

exports.createCategory = (req, res, next) => {
  Category.find({ name: req.body.name })
    .exec()
    .then((category) => {
      const error = new Error();
      if (category.length > 0) {
        error.message = "Category Exists!";
        throw error;
      }
    })
    .then(() => {
      const category = createCategory(
        req.body.name,
        req.body.description,
        req.body.image
      );
      return category.save();
    })
    .then((result) => {
      return res.status(201).json({
        message: "Category created successfully!",
      });
    })
    .catch((error) => {
      next(error);
    });
};

exports.getAllCategory = (req, res, next) => {
  Category.find({})
    .exec()
    .then((result) => {
      if (result) {
        return res.status(200).json({
          categories: result,
          message: "Get All Categories Successful!",
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

// exports.deleteCategory = (req, res, next) => {
//   const userId = req.params.userId;
//   User.remove({ _id: userId })
//     .exec()
//     .then((result) => {
//       res.status(200).json({
//         message: "User Deleted Successfully!",
//       });
//     })
//     .catch((error) => {
//       error.message = "Could Not Delete User!";
//       next(error);
//     });
// };

function createCategory(name, description, image) {
  return new Category({
    _id: new mongoose.Types.ObjectId(),
    name: name,
    description: description,
    image: image,
  });
}
