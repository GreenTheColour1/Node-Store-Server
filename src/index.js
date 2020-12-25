const express = require("express");
const Mongoose = require("mongoose");
const cors = require("cors");
const productRouter = require("./routes/productApi");
require("dotenv/config");

const app = express();

let main = async () => {
  // Connect to the database
  //await the connection for the small chance the the user tries to query the db before the connection has been made
  await Mongoose
    .connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(
      console.log("database connected")
    ).catch((err) => {
      console.log(err);
    });

  //add cors headers
  app.use(cors());
  //set up body parser
  app.use(express.json());

  const PORT = 5000;

  //home page
  app.get("/", (req, res) => {
    res.send("Server started");
  });

  //products route
  app.use("/api/products", productRouter);

  //start server
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
};

main().catch(err => console.log(err));
