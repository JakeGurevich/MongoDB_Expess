const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/productsdb-api", {
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// tv.save()
//   .then(() => {
//     console.log(Product);
//   })
//   .catch((err) => {
//     console.log("Error!", err);
//   });
