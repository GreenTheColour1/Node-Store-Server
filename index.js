const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require('cors');
require("dotenv/config");

const app = express();

app.use(cors());

async function main() {
  //routes
  const PORT = 5000;

  app.get("/", (req, res) => {
    res.send("Server started");
  });

  try{
    const client = new MongoClient(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    await client.connect();
  
    console.log("connected to database");

    const db = client.db('sample_restaurants')

    //test GET request
    app.get("/api/names", async (req, res) => {
      //connect the database the the object
      const col = db.collection('neighborhoods');

      let results = await col.find({}, {projection: {_id:0, name:1}}).toArray();

      res.send(JSON.stringify(results));
    });
  }
  catch(ex){
    console.log(ex);
  }

  //start server
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

main().catch(console.error);
