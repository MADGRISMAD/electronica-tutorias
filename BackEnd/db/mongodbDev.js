
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const database = client.db("tutoriasDev");
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// Create a new user
async function createAlumno(data) {
    return database.collection('alumnos').insertOne(data);
}

// Get all users
async function getAlumnos() {
    return database.collection('alumnos').find().toArray();
}

// Get a user by its numero de control
async function getAlumno(numeroDeControl) {
    return database.collection('alumnos').findOne({ numeroDeControl: numeroDeControl });
}

// Update a user by its numero de control
async function updateAlumno(numeroDeControl, data) {
    return database.collection('alumnos').findOneAndUpdate({ numeroDeControl: numeroDeControl }, data);
}

// Delete a user by its numero de control
async function deleteAlumno(numeroDeControl) {
    return database.collection('alumnos').findOneAndDelete({ numeroDeControl: numeroDeControl });
}

client.connect();
// run().catch(console.dir);

module.exports = {
    createAlumno,
    getAlumnos,
    getAlumno,
    updateAlumno,
    deleteAlumno,
};