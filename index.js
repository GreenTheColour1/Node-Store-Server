const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv/config");

const app = express();

async function main() {
  //routes
  const PORT = 5000;

  app.get("/", (req, res) => {
    res.send("Server started");
  });

  //connect to DB
  const client = new MongoClient(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  MongoClient.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((client) => {
      console.log("connected to database");

      const db = client.db('sample_restaurants')

      //GET Request
      app.get("/api/names", (req, res) => {
        //connect the database the the object
        const col = db.collection('neighborhoods');

        col.find({}, {projection: {_id:0, name:1}}).toArray()
          .then(results => {
            res.send(results);
          }).catch(error => console.error(error));
      });

      //Other requests
    })
    .catch((error) => console.error(error));

  //start server
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

main().catch(console.error);
