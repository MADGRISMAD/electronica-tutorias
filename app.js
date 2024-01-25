const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const expressSession = require("express-session");
const env = require("dotenv").config();

// // DB SECTION
// const dataOrigin = require('./db/mongodb');

// CORS SECTION
const whitelist = ["http://172.31.22.8:8081", "http://localhost", "http://frontend"];

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
app.use(cors(corsOptions));

// ROUTER SECTION
const alumnosRouter = require("./routes/alumnos");

app.use("/alumnos", alumnosRouter);

// MIDDLEWARE SECTION
app.use(
    expressSession({
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: true,
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3001 | process.env.PORT, () =>
    console.log("Listening on port " + process.env.PORT)
);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("api/login", (req, res) => {
    res.status(200).json({ message: "Login successful" });
});

module.exports = app;
