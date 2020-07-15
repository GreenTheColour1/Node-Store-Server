const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRouter = require("./routes/productApi");
require("dotenv/config");

const app = express();

let main = async function () {
  // Connect to the database
  await mongoose
    .connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(
      console.log("database connected")
    ).catch((err) => {
      console.log(err);
    });

  app.use(cors());
  //set up body parser
  app.use(express.json());

  //port
  const PORT = 5000;

  app.get("/", (req, res) => {
    res.send("Server started");
  });

  app.use("/api/products", productRouter);

  //start server
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
};

main().catch(err => console.log(err));
