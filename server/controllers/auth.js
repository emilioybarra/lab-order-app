const sanitize = require('mongo-sanitize')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Admin = require('../models/admin')

exports.getAuthenticatedUser = (req, res, next) => {
  const hashedWordpressUser = sanitize(req.params.hashedWordpressUser)

  User.exists({ wordpressUser: hashedWordpressUser })
    .then((userExists) => {
      if (userExists) {
        User.findOne({ wordpressUser: hashedWordpressUser }, (err, user) => {
          if (err) { return res.status(400).send(err) }
          if (!user) { return res.status(401).json({ status: 401, message: 'Unauthorized' }) }

          user.generateToken((err, user) => {
            if (err) { return res.status(400).send(err) }
            res.cookie('auth_role', user.role)
            res.cookie('auth_token', user.token)
            res.status(200).json(user)
          })
        })
          .catch((err) => {
            const error = new Error(err)
            error.httpStatusCode = 500
            return next(error)
          })
      } else {
        User.create({ wordpressUser: hashedWordpressUser })
          .then((user) => {
            user.generateToken((err, user) => {
              if (err) { return res.status(400).send(err) }
              res.cookie('auth_role', user.role)
              res.cookie('auth_token', user.token)
              res.status(200).json(user)
            })
          })
          .catch((err) => {
            const error = new Error(err)
            error.httpStatusCode = 500
            return next(error)
          })
      }
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.getAuthenticatedAdmin = (req, res, next) => {
  const decodedAdminToken = jwt.decode(sanitize(req.cookies.auth_token))

  if (decodedAdminToken && decodedAdminToken.id) {
    Admin.findOne({ _id: decodedAdminToken.id }, (err, admin) => {
      if (err) { return res.status(400).send(err) }
      if (!admin) { return res.status(401).json({ status: 401, message: 'Username or password are not valid.' }) }

      admin.generateToken((err, admin) => {
        if (err) { return res.status(400).send(err) }
        res.cookie('auth_role', admin.role)
        res.cookie('auth_token', admin.token)
        const prepareAdmin = {
          role: admin.role,
          username: admin.username,
          token: admin.token
        }
        res.status(200).json(prepareAdmin)
      })
    }).catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
  } else {
    res.status(401).json({
      status: 401,
      message: 'Unauthorized'
    })
  }
}

exports.postLoginAdmin = (req, res, next) => {
  const { username, password } = sanitize(req.body.loginData)

  Admin.findOne({ username }, (err, admin) => {
    if (err) { return res.status(400).send(err) }
    if (!admin) { return res.status(401).json({ status: 401, message: 'Username or password are not valid.' }) }
    admin.comparePassword(password, (err, isMatch) => {
      if (err) { return res.status(400).send(err) }
      if (!isMatch) { return res.status(401).json({ status: 401, message: 'Username or password are not valid.' }) }
      admin.generateToken((err, admin) => {
        if (err) { return res.status(400).send(err) }
        res.cookie('auth_role', admin.role)
        res.cookie('auth_token', admin.token)
        res.status(200).json(admin)
      })
    })
  }).catch((err) => {
    const error = new Error(err)
    error.httpStatusCode = 500
    return next(error)
  })
}

exports.postLogoutAdmin = (req, res, next) => {
  const { username } = sanitize(req.body.admin)

  Admin.findOne({ username }, (err, admin) => {
    if (err) { return res.status(400).send(err) }
    if (!admin) { return res.status(401).json({ status: 401, message: 'Username or password are not valid.' }) }
    admin.token = ''
    admin.save()
    res.clearCookie('auth_role')
    res.clearCookie('auth_token')
    res.status(200).json({ status: 200, message: 'Logout successful' })
  }).catch((err) => {
    const error = new Error(err)
    error.httpStatusCode = 500
    return next(error)
  })
}
