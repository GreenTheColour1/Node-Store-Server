const express = require('express');
const Brand = require("../models/BrandModel");

const router = express.Router();

//get all brands
router.get('/', async (req, res) => {
    const results = await Brand.find().select({"_id": 0});
    res.json(results);
});

module.exports = router;