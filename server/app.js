require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI = `mongodb+srv://${ process.env.MONGO_DB_USER }:${ process.env.MONGO_DB_PW }@cluster0.30uow.mongodb.net/lab-order`;

const app = express();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const orderFormsRoutes = require('./routes/order-forms');
const templatesRoutes = require('./routes/templates');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
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
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => { app.listen(5000); })
  .catch(err => {
    console.log(err);
  });
