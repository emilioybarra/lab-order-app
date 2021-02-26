const User = require('../models/user')

exports.getAuthenticatedUser = (req, res, next) => {
  const hashedWordpressUser = req.params.hashedWordpressUser
  User.exists({ wordpressUser: hashedWordpressUser })
    .then((userExists) => {
      if (userExists) {
        User.findOne({ wordpressUser: hashedWordpressUser })
          .then((user) => {
            res.status(200).json(user)
          })
          .catch((err) => {
            const error = new Error(err)
            error.httpStatusCode = 500
            return next(error)
          })
      } else {
        User.create({
          wordpressUser: hashedWordpressUser,
          orderForms: [],
          invoiceAddressTemplates: [],
          upperTeethTemplates: [],
          lowerTeethTemplates: []
        })
          .then((user) => {
            res.status(200).json(user)
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
