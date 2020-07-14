const express = require('express');
const Product = require("../models/ProductModel");

const router = express.Router();


router.get("/", async (req, res) => {
    
  const results = await Product.find();

  res.json(results);
});

module.exports = router;
