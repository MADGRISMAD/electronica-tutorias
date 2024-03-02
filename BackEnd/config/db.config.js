// DEPENDENCY INJECTION
// CHANGE TO YOUR OWN DATABASE IF YOU WANT
// This file is used to change the database connection
let db;
if (process.env.NODE_ENV === "prod") {
    db = require("../db/mongodbProd");
}
if (process.env.NODE_ENV === "dev") {
    db = require("../db/mongodbDev");
}

module.exports = db;