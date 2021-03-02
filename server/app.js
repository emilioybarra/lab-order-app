require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const app = express()
const errorController = require('./controllers/error')
const authRoutes = require('./routes/auth')
const orderFormsRoutes = require('./routes/order-forms')
const templatesRoutes = require('./routes/templates')
const MONGO_DB_URI = process.env.MONGO_DB_URI

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use('/auth', authRoutes)
app.use('/templates', templatesRoutes)
app.use('/order-forms', orderFormsRoutes)

app.use(errorController.get404)
app.use((error, req, res, next) => {
  if (error) {
    res.status(500).json({
      status: 500,
      message: 'Internal Error'
    })
  }
})

mongoose
  .connect(MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Database is connected')

    app.listen(PORT, () => {
      console.log(`App is running on ${ PORT }`)
    })
  })
  .catch((err) => {
    console.log(err)
  })

module.exports = {
  path: '/api',
  handler: app
}
