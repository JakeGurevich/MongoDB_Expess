const mongoose = require("mongoose");

const Product = mongoose.model("product", {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },

  details: {
    description: {
      type: String,
      minLength: 10,
    },
    price: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) {
          console.log("The number has to be greater than 0");
        }
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
    },
  },
});
// const tv = new Product({
//   name: "Laptop",
//   category: "Electronics",
//   isActive: true,
//   details: {
//     description: "super fast laptop",
//     price: 10000,
//     discount: 50,
//     image: "img",
//   },
// });
module.exports = Product;
