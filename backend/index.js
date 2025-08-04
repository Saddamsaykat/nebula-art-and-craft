const express = require('express');
const {
  MongoClient,
  ServerApiVersion,
  ObjectId

} = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.caycpiu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version and set interval for no crush site.
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)

// Create User DataBase
    const database = client.db("AssignmentTen");
    const usersCollection = database.collection("users");

    app.get('/users', async (req, res) => {

      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);

    })
    // Data Get From Clint Site
    app.get('/users/:id', async (req, res) => {

      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const user = await usersCollection.findOne(query);
      res.send(user);

    })



    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await usersCollection.insertOne(user);
      res.send(result)
    })


    
    app.put('/users/:id', async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      console.log(user);
      const filter = {_id: new ObjectId(id)};
      const option = {upsert: true};
      const updateUser = {
        $set: {
          name: user.name,
          email: user.email,
          image: user.image,
          itemname: user.itemname,
          description: user.description,
          price: user.price,
          rating: user.rating,
          processingtime: user.processingtime,
          agree: user.agree,
          subcatagory: user.subcatagory,
          customization: user.customization

        }

      }
      const result = await usersCollection.updateOne(filter, updateUser, option);
      res.send(result);
    })




//delated data
    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = {
        _id: new ObjectId(id)
      }
      const result = await usersCollection.deleteOne(query);
      res.send(result)
    })

    // Send a ping to confirm a successful connection

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


// using local host to see data
app.get('/', (req, res) => {
  res.send('Saykat World')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})