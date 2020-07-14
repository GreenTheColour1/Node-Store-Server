const { Router } = require('express');

const router = Router();


router.get("/api/names", async (req, res) => {
    //connect the database the the object
    const col = db.collection("products");

    let results = await col
      .find({}, { projection: { _id: 0, ProductName: 1 } })
      .toArray();

    res.json(results);
});

module.exports = router;
