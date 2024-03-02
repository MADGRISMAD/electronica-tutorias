const expressSession = require("express-session");
const MemcachedStore = require("connect-memcached")(expressSession);
const { v4: uuidv4 } = require("uuid");

const sessionConfig = {
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
    });
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

module.exports = expressSession(sessionConfig);