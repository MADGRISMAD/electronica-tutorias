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

// Alumnos
const Alumno = {
    // Create a new user
    createAlumno: async (data) => {
        return database.collection("alumnos").insertOne(data);
    },
    // Get all users
    getAlumnos: async () => {
        return database.collection("alumnos").find().toArray();
    },
    // Get all users with a cita within 30 minutes
    getAlumnosWithCita: async () => {
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
    },
    // Get a user by its numero de control
    getAlumno: async (numeroDeControl) => {
        return database
            .collection("alumnos")
            .findOne({ numeroDeControl: numeroDeControl });
    },

    // Update a user by its numero de control
    updateAlumno: async (numeroDeControl, data) => {
        return database
            .collection("alumnos")
            .findOneAndUpdate({ numeroDeControl: numeroDeControl }, data);
    },

    // Delete a user by its numero de control
    deleteAlumno: async (numeroDeControl) => {
        return database
            .collection("alumnos")
            .findOneAndDelete({ numeroDeControl: numeroDeControl });
    },
};

// Citas
const Citas = {
    createCita: async (data) => {
        return database.collection("citas").insertOne(data);
    },
    getCitas: async () => {
        return database.collection("citas").find().toArray();
    },
    getCita: async (id) => {
        return database.collection("citas").findOne({ _id: id });
    },
    getCitasByAlumno: async (id) => {
        return database
            .collection("citas")
            .find({ numeroDeControl: id })
            .toArray();
    },
    updateCita: async (id, data) => {
        return database.collection("citas").findOneAndUpdate({ _id: id }, data);
    },
    deleteCita: async (id) => {
        return database.collection("citas").findOneAndDelete({ _id: id });
    },
};
// Maestros
const Maestro = {
    createMaestro: async (data) => {
        return database.collection("maestros").insertOne(data);
    },
    getMaestros: async () => {
        return database.collection("maestros").find().toArray();
    },
    getMaestro: async (numeroDeEmpleado) => {
        return database
            .collection("maestros")
            .findOne({ numeroDeEmpleado: numeroDeEmpleado });
    },
    updateMaestro: async (numeroDeEmpleado, data) => {
        return database
            .collection("maestros")
            .findOneAndUpdate({ numeroDeEmpleado: numeroDeEmpleado }, data);
    },
    deleteMaestro: async (numeroDeEmpleado) => {
        return database
            .collection("maestros")
            .findOneAndDelete({ numeroDeEmpleado: numeroDeEmpleado });
    },
};

const Clase = {
    createClase: async (data) => {
        return database.collection("clases").insertOne(data);
    },

    getClases: async () => {
        return database.collection("clases").find().toArray();
    },

    getClase: async (id) => {
        return database.collection("clases").findOne({ _id: id });
    },

    updateClase: async (id, data) => {
        return database
            .collection("clases")
            .findOneAndUpdate({ _id: id }, data);
    },

    deleteClase: async (id) => {
        return database.collection("clases").findOneAndDelete({ _id: id });
    },
};
const Asignatura = {
    createAsignatura: async (data) => {
        return database.collection("asignaturas").insertOne(data);
    },

    getAsignaturas: async () => {
        return database.collection("asignaturas").find().toArray();
    },

    getAsignatura: async (id) => {
        return database.collection("asignaturas").findOne({ _id: id });
    },

    updateAsignatura: async (id, data) => {
        return database
            .collection("asignaturas")
            .findOneAndUpdate({ _id: id }, data);
    },

    deleteAsignatura: async (id) => {
        return database.collection("asignaturas").findOneAndDelete({ _id: id });
    },
};
client.connect();
// run().catch(console.dir);

module.exports = {
    Alumno,
    Citas,
    Maestro,
    Clase,
    Asignatura,
};
