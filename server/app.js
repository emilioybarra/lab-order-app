const csrf = require('csurf');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI = 'mongodb+srv://emilio:Maw79708@cluster0.30uow.mongodb.net/lab-order';

const app = express();
const csrfProtection = csrf();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});

const userRoutes = require('./routes/user');
const ordersRoutes = require('./routes/orders');
const patientRoutes = require('./routes/patient');
const templatesRoutes = require('./routes/templates');

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(csrfProtection);

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if (!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch(err => {
      next(new Error(err));
    });
});

*/


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api', userRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/templates', templatesRoutes);

app.use(errorController.get404);

app.use((error, req, res, next) => {
  res.status(500).json({
    status: 500,
    message: 'Internal Error'
    // isAuthenticated: req.session.isLoggedIn
  });
});

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => { app.listen(5000); })
  .catch(err => {
    console.log(err);
  });
