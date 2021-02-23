require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const errorController = require('./controllers/error');
const authRoutes = require('./routes/auth');
const orderFormsRoutes = require('./routes/order-forms');
const templatesRoutes = require('./routes/templates');
const MONGO_DB_URI = process.env.MONGO_DB;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api/auth', authRoutes);
app.use('/api/templates', templatesRoutes);
app.use('/api/order-forms', orderFormsRoutes);

app.use(errorController.get404);
app.use((error, req, res, next) => {
  res.status(500).json({
    status: 500,
    message: 'Internal Error'
  });
});

mongoose
  .connect(MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => { app.listen(5000); })
  .catch((err) => {
    console.log(err);
  });
