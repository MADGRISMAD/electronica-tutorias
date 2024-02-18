const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const expressSession = require("express-session");
const MemcachedStore = require("connect-memcached")(expressSession);
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
let corsOptions;
const whitelist = ["http://frontend"];
if (process.env.NODE_ENV === "prod") {
    corsOptions = {
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1 || !origin) {
                console.log("origin: ", origin);
                callback(null, true);
            } else {
                console.log("origin: ", origin);
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    };
}
if (process.env.NODE_ENV === "dev") {
    corsOptions = {
        origin: "http://localhost:8080",
        credentials: true,
    };
}

app.use(cors(corsOptions));

// MIDDLEWARE SECTION

let sessionConfig = {
    resave: false,
    saveUninitialized: true,
    genid: function (req) {
        return uuidv4();
    },
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
    },
};

if (process.env.NODE_ENV === "prod") {
    
    sessionConfig.store = new MemcachedStore({
        hosts: ["127.0.0.1:11211"],
        secret: process.env.SECRET,
    })
    sessionConfig.secret = process.env.SECRET;
    sessionConfig.cookie.domain = "frontend";
    // When using HTTPS, set secure to true
    sessionConfig.cookie.secure = false;
}
if (process.env.NODE_ENV === "dev") {
    sessionConfig.secret = "secret";
    sessionConfig.cookie.domain = "localhost";
    sessionConfig.cookie.secure = false;
}
app.use(expressSession(sessionConfig));

// ROUTER SECTION
const alumnosRouter = require("./routes/alumno.route");
app.use("/api/alumnos", alumnosRouter);

const citasRouter = require("./routes/cita.route");
app.use("/api/citas", citasRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});

// HEALTH CHECK
app.get("/", (req, res) => {
    res.send("Hello World");
});

// app.post("/api/login", (req, res) => {
//     res.status(200).json({ message: "Login successful" });
// });
module.exports = app;
