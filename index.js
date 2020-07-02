const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv/config");

const app = express();

async function main() {
  //routes
  const PORT = 5000;

  app.use("/", (req, res) => {
    res.send("Server started");
  });

  //connect to DB
  const client = new MongoClient(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect(() => {
    console.log("database connected");

    //connect the database the the object
    const db = client.db("sample_mflix");

    //connect the collection to the object
    const col = db.collection("movies");

    //finds the specified feilds in the collection
    //SQL: SELECT title FROM movies
    const cusor = col.find({}, {projection:{title:1, _id:0}});
    cusor.on('data', data => console.log(data.title));
  });

  //close the connection to the database
  client.close();

  //start server
  app.listen(PORT);
  console.log(`Server started on port ${PORT}`);
}

main().catch(console.error);
