require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.get404 = (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'Page Not Found'
  })
}

exports.get500 = (error, req, res, next) => {
  if (error) {
    res.status(500).json({
      status: 500,
      message: 'Internal Error'
    })
  }
}

exports.verifyJWT = (req, res, next) => {
  const bearerHeader = req.headers.authorization
  if (bearerHeader) {
    const jwtToken = bearerHeader.split(' ')[1]
    jwt.verify(jwtToken, process.env.JWT_SECRET, (err) => {
      if (err) {
        res.status(401).json({
          status: 401,
          message: 'Unauthorized'
        })
      }
    })
  } else {
    res.status(403).json({
      status: 403,
      message: 'Forbidden'
    })
  }
  next()
}
