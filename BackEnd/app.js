const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const env = require("dotenv").config(
    process.env.NODE_ENV === "dev"
        ? { path: "./.env.dev" }
        : { path: "./.env.prod" }
);
const http = require("http");
const { v4: uuidv4 } = require("uuid");
// // DB SECTION
// const dataOrigin = require('./db/mongodb');
app.enable("trust proxy");
console.log(process.env.NODE_ENV);
// CORS SECTION

const cors = require("./config/cors.config");
app.use(cors);


const expressSession = require("./config/session.config");
app.use(expressSession);

// ROUTER SECTION
const alumnosRouter = require("./routes/alumno.route");
app.use("/api/alumnos", alumnosRouter);

const citasRouter = require("./routes/cita.route");
app.use("/api/citas", citasRouter);

const clasesRouter = require("./routes/clase.route");
app.use("/api/clases", clasesRouter);

const maestrosRouter = require("./routes/maestro.route");
app.use("/api/maestros", maestrosRouter);

const asignaturaRouter = require("./routes/asignatura.route");
app.use("/api/asignaturas", asignaturaRouter);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});

// CRON SECTION
const { sendMailToAlumnos } = require("./utils/cron.utils");
sendMailToAlumnos.start();


// HEALTH CHECK
app.get("/", (req, res) => {
    res.send("Hello World");
});
//// TESTING SECTION
// app.post("/api/login", (req, res) => {
//     res.status(200).json({ message: "Login successful" });
// });
module.exports = app;