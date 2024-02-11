const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const expressSession = require("express-session");
const RedisStore = require("connect-redis").default;
const { createClient } = require("redis");
const env = require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const http = require("http");
// // DB SECTION
// const dataOrigin = require('./db/mongodb');
app.enable("trust proxy");

// CORS SECTION

let corsOptions, sessionConfig;
const whitelist = [
    "http://172.31.22.8:8081",
    "http://localhost:8080",
    "http://frontend",
];
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
    };
} else {
    corsOptions = {
        origin: true,
        credentials: true,
    };
}

console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
app.use(cors(corsOptions));

// MIDDLEWARE SECTION
if (process.env.NODE_ENV === "prod") {
    const redisClient = createClient().connect().catch(new Error("Redis connection failed"));
    const redisStore = new RedisStore({ client: redisClient });
    sessionConfig = {
        store: redisStore,
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: true, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 },
    };
}
if (process.env.NODE_ENV === "dev") {
    sessionConfig = {
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false, httpOnly: false, maxAge: 1000 * 60 * 60 * 24 },
    };
}
app.use(expressSession(sessionConfig));

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

server.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});
module.exports = app;
