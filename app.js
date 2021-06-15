const express = require("express");
const router = express.Router();
let products = require("./data");
const app = express();

app.use(express.json());

app.post("/products", (req, res) => {
  req.body.id = products[products.length - 1].id + 1;
  products.push(req.body);

  res.status(201).json(req.body);
});

app.delete("/products/:productId", (req, res) => {
  const foundProduct = products.find(
    (product) => product.id === +req.params.productId
  );
  if (foundProduct) {
    products = products.filter(
      (product) => product.id !== +req.params.productId
    );
    res.status(204).end();
  } else {
    res.status(404).json({ message: " Product not Found" });
  }
});

app.get("/products", (req, res) => {
  res.json(products);
});

// app.put("/products/:productId", (req, res) => {
//   const { productId } = req.params;
//   const foundProduct = (productId);
//   if (foundProduct) {
//     (foundProduct, req.body);
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: "Product not found" });
//   }
// });
// function checkProjectExists(req, res, next) {
//   const { id } = req.params;
//   const project = projects.find(p => p.id == id);

// app.put("/products/:productId", checkProjectExists, (req, res) => {
//   const { productId } = req.params;
//   const { title } = req.body;

//   const product = products.find((p) => p.id == id);

//   product.title = title;

//   return res.json(product);
// });

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
