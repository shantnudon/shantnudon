import React from "react";
const { MongoClient, ServerApiVersion } = require("mongodb");

const page = () => {
  const uri =
    "mongodb+srv://shan:qazx123@don.r1ybgbx.mongodb.net/?retryWrites=true&w=majority&appName=don";

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  async function run() {
    try {
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    } finally {
      // Ensures that the client will close when you finish/error
      // define a model
      await client.find((err, result) => {
        if (err) {
          console.log(error);
        } else {
          console.log(result);
        }
      });
      await client.close();
    }
  }
  run().catch(console.dir);

  return <div>hunny binny</div>;
};

export default page;
