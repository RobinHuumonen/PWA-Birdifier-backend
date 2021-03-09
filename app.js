const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./controllers/pwa-birdifier');
const middleware = require('./utils/middleware');
const path = require('path');

app.use(cors());
app.use(express.json());

app.use(middleware.requestLogger);

//app.use(router);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/* if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')
  app.use('/api/testing', testingRouter)
} */

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;