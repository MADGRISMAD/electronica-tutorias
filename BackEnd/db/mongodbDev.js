const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
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
    return database.collection("alumnos").insertOne(data);
}

// Get all users
async function getAlumnos() {
    return database.collection("alumnos").find().toArray();
}
// Get all users with a cita within 30 minutes
async function getAlumnosWithCita() {
    // Current date and time
    const date = new Date().now();
    // 30 minutes after now
    const cutoffDate = new Date().now();
    // Gets Alumnos with a cita object created in the database
    return database
        .collection("citas")
        .aggregate([
            {
                $lookup: {
                    $from: "alumnos",
                    localField: "numeroDeControl",
                    foreignField: "numeroDeControl",
                    as: "alumno",
                },
            },
            {
                $match: {
                    fecha: { $lte: cutoffDate },
                },
            },
            {
                $project: {
                    alumno: 1,
                },
            },
        ])
        .toArray((err, res) => {
            if (err) throw err;
            // console.log(res);
        });
}
// Get a user by its numero de control
async function getAlumno(numeroDeControl) {
    return database
        .collection("alumnos")
        .findOne({ numeroDeControl: numeroDeControl });
}

// Update a user by its numero de control
async function updateAlumno(numeroDeControl, data) {
    return database
        .collection("alumnos")
        .findOneAndUpdate({ numeroDeControl: numeroDeControl }, data);
}

// Delete a user by its numero de control
async function deleteAlumno(numeroDeControl) {
    return database
        .collection("alumnos")
        .findOneAndDelete({ numeroDeControl: numeroDeControl });
}

async function createCita(data) {
    return database.collection("citas").insertOne(data);
}
async function getCitas() {
    return database.collection("citas").find().toArray();
}
async function getCita(id) {
    return database.collection("citas").findOne({ _id: id });
}
async function getCitasByAlumno(id) {
    return database.collection("citas").find({ numeroDeControl: id }).toArray();
}
async function updateCita(id, data) {
    return database.collection("citas").findOneAndUpdate({ _id: id }, data);
}
async function deleteCita(id) {
    return database.collection("citas").findOneAndDelete({ _id: id });
}
client.connect();
// run().catch(console.dir);

module.exports = {
    createAlumno,
    getAlumnos,
    getAlumnosWithCita,
    getAlumno,
    updateAlumno,
    deleteAlumno,
    createCita,
    getCitas,
    getCita,
    getCitasByAlumno,
    updateCita,
    deleteCita,
};
