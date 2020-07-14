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

  //start server
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
}

main().catch(console.error);
