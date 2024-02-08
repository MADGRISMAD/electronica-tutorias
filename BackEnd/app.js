const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const expressSession = require("express-session");
const env = require("dotenv").config();
const http = require("http");
// // DB SECTION
// const dataOrigin = require('./db/mongodb');

app.enable("trust proxy");

// CORS SECTION
const whitelist = ["http://172.31.22.8:8081", "http://localhost:8080", "http://frontend"];

// corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1 || !origin) {
//             console.log("origin: ", origin);
//             callback(null, true);
//         } else {
//             console.log("origin: ", origin);
//             callback(new Error("Not allowed by CORS"));
//         }
//     },
// };
corsOptions = {
    origin: true,
    credentials: true,
}

app.use(cors(corsOptions));

// MIDDLEWARE SECTION
app.use(
    expressSession({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true,
        // cookie: { secure: true },
    })
);


// ROUTER SECTION
const alumnosRouter = require("./routes/alumnos");

app.use("/api/alumnos", alumnosRouter);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// app.post("/api/login", (req, res) => {
//     res.status(200).json({ message: "Login successful" });
// });

const server = http.createServer(app);

server.listen(3001 | process.env.PORT , () => {
    console.log("Server running on port 3001");
});
module.exports = app;
