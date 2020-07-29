const express = require('express');
const Product = require("../models/ProductModel");

/**
 * This file implements all the routes of the 'api/products' route
 */

const router = express.Router();


router.get("/", async (req, res) => {
    
  const results = await Product.find().select({"_id": 0, "Brand": 1, "ProductName": 1, "GraphicName": 1, "Description": 1});

  res.json(results);
});



// router.post("/", async (req, res) => {
//   try{
//     const product = new Product(req.body);
//     const createdProduct = await product.save();
//     res.json(createdProduct);
//   }
//   catch(err){
//     console.log(err);
//   }
// });

module.exports = router;
