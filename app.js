const express = require('express');
const app = express();
const mongodb = require('mongodb');
const env = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
// const routes = require('./routes');

corsOptions = {
    origin: true,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dataOrigin = require('./db/mongodb');

app.listen(3001 | process.env.PORT, () => console.log('Listening on port ' + process.env.PORT));

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;