const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const middleware = require('./utils/middleware');
const path = require('path');

app.use(cors());
app.use(express.json());

app.use(middleware.requestLogger);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;