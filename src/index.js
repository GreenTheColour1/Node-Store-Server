const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();

app.use(cors());

async function main() {
  //routes
  const PORT = 5000;

  mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.get("/", (req, res) => {
    res.send("Server started");
  });

  try {
    

    await client.connect();
    console.log("connected to database");

    const db = client.db("shop");

    //test GET request
    app.get("/api/names", async (req, res) => {
      //connect the database the the object
      const col = db.collection("products");

      let results = await col
        .find({}, { projection: { _id: 0, ProductName: 1 } })
        .toArray();

      res.json(results);
    });
  } catch (ex) {
    console.log(ex);
  }

  //start server
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
}

main().catch(console.error);
