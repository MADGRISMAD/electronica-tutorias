const cors = require("cors");

let corsOptions = {};
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
        origin: true,
        credentials: true,
    };
}

module.exports = cors(corsOptions);