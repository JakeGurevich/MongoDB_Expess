const express = require("express");

require("./db/mongoose");
const Product = require("./model/products");

// const { loadMovies, addMovie } = require("./utils");

const app = express();
app.use(express.json());

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get("/api/products/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const product = await Product.findById(_id);
    res.send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.post("/api/products", async (req, res) => {
  console.log(req.body);
  try {
    const dvd = new Product(req.body);
    const data = await dvd.save();
    console.log;
    res.status(201).send(data);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.post("/api/movies", (req, res) => {
  console.log(req.body);
  try {
    const add = addMovie(req.body);
    res.status(201).send(add);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Port ${PORT} listening...`);
});
