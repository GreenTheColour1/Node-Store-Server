const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRouter = require("./routes/productApi");
const morgan = require("morgan");
require("dotenv/config");

const app = express();

mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(morgan("short"));

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
