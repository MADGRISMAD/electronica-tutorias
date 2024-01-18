const express = require('express');
const app = express();

const env = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

// const routes = require('./routes');

// app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001 | process.env.PORT, () => console.log('Listening on port ' + process.env.PORT));



module.exports = app;