
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:test@cluster0.hu4ebhp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log(err)
  client.close();
});

MongoClient.connect(uri)
.then((client) => {
    console.log(client.db())
})
.catch(err =>{
    console.log("Error")
})