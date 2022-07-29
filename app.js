const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb://0.0.0.0:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    // await client.connect();

    // Establish and verify connection
    // await client.db("fruitsDB").command({ ping: 1 });
    // console.log("Connected successfully to server");

    const db = client.db("fruitsDB");
    const fruits = db.collection("fruits");

    // const newFruit = {
    //     name: "Dragon Fruit",
    //     score: 5,
    //     review: "Kinda Bland"
    // };

    const query = {}

    // const result = await fruits.insertOne(newFruit);

    const cursor = fruits.find(query);
    
      // print a message if no documents were found
    if ((await fruits.countDocuments()) === 0) {
      console.log("No documents found!");
    }
    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);
    
    // console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


