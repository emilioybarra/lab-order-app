const sanitize = require('mongo-sanitize')
const User = require('../models/user')
const UpperArchwiresTemplate = require('../models/upper-archwires-template')
const LowerArchwiresTemplate = require('../models/lower-archwires-template')

// Upper Archwires Templates

exports.getAllUpperArchwiresTemplates = (req, res, next) => {
  const perPage = 5
  const userId = sanitize(req.query.userId)
  let currentPage = sanitize(req.query.page) || 1
  let totalTemplates
  User.findById(userId)
    .then(() => {
      let prepareUpperArchwiresTemplates = {
        templates: [],
        totalTemplates: 0
      }
      UpperArchwiresTemplate.find({ userId })
        .countDocuments()
        .then((count) => {
          totalTemplates = count
          return UpperArchwiresTemplate.find({ userId })
            .skip((currentPage - 1) * perPage)
            .limit(perPage)
        })
        .then((templates) => {
          if (!templates.length) {
            currentPage = 1
            return UpperArchwiresTemplate.find({ userId })
              .skip((currentPage - 1) * perPage)
              .limit(perPage)
          }
          return templates
        })
        .then((templates) => {
          prepareUpperArchwiresTemplates = {
            templates,
            totalTemplates,
            currentPage: parseInt(currentPage)
          }
          res.json(prepareUpperArchwiresTemplates)
        })
        .catch((err) => {
          const error = new Error(err)
          error.httpStatusCode = 500
          return next(error)
        })
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.getUpperArchwiresTemplateById = (req, res, next) => {
  const userId = sanitize(req.query.userId)
  const upperArchwiresTemplateId = sanitize(req.params.id)
  User.findById(userId)
    .populate('upperArchwiresTemplates.upperArchwiresTemplate')
    .then((user) => {
      const { upperArchwiresTemplate } = user.upperArchwiresTemplates.find((template) => {
        return template.upperArchwiresTemplate._id.toString() === upperArchwiresTemplateId
      })
      if (upperArchwiresTemplate) {
        res.json(upperArchwiresTemplate)
      } else {
        res.status(404).send({ message: 'No template with ID found.' })
      }
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.postCreateUpperArchwiresTemplate = (req, res, next) => {
  const { userId, title, upperArchwiresTemplate } = sanitize(req.body)
  UpperArchwiresTemplate.create({ userId, title, upperArchwiresTemplate })
    .then((upperArchwiresTemplate) => {
      User.findById(userId, (error, user) => {
        if (error) { return res.status(400).send(error) }
        if (!user) { return res.status(401).json({ status: 401, message: 'Unauthorized' }) }
        user.addToUpperArchwiresTemplates(upperArchwiresTemplate._id)
      })
        .catch((err) => {
          const error = new Error(err)
          error.httpStatusCode = 500
          return next(error)
        })
      res.status(201).json({
        status: 201,
        message: 'Created template',
        templateId: upperArchwiresTemplate._id
      })
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.deleteUpperArchwiresTemplateById = (req, res, next) => {
  const userId = sanitize(req.query.userId)
  const upperArchwiresTemplateId = sanitize(req.params.id)
  UpperArchwiresTemplate.deleteOne({ _id: upperArchwiresTemplateId })
    .then(() => {
      User.findById(userId, (error, user) => {
        if (error) { return res.status(400).send(error) }
        if (!user) { return res.status(401).json({ status: 401, message: 'Unauthorized' }) }
        const upperArchwiresTemplate = user.upperArchwiresTemplates.find((template) => {
          return template.upperArchwiresTemplate._id.toString() === upperArchwiresTemplateId
        })
        user.upperArchwiresTemplates.pull({ _id: upperArchwiresTemplate._id })
        user.save()
      })
        .then(() => {
          res.status(200).json({ status: 200, message: 'Template is deleted.' })
        })
        .catch((err) => {
          const error = new Error(err)
          error.httpStatusCode = 500
          return next(error)
        })
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

// Lower Archwires Templates

exports.getAllLowerArchwiresTemplates = (req, res, next) => {
  const perPage = 5
  const userId = sanitize(req.query.userId)
  let currentPage = sanitize(req.query.page) || 1
  let totalTemplates
  User.findById(userId)
    .then(() => {
      let prepareLowerArchwiresTemplates = {
        templates: [],
        totalTemplates: 0
      }
      LowerArchwiresTemplate.find({ userId })
        .countDocuments()
        .then((count) => {
          totalTemplates = count
          return LowerArchwiresTemplate.find({ userId })
            .skip((currentPage - 1) * perPage)
            .limit(perPage)
        })
        .then((templates) => {
          if (!templates.length) {
            currentPage = 1
            return LowerArchwiresTemplate.find({ userId })
              .skip((currentPage - 1) * perPage)
              .limit(perPage)
          }
          return templates
        })
        .then((templates) => {
          prepareLowerArchwiresTemplates = {
            templates,
            totalTemplates,
            currentPage: parseInt(currentPage)
          }
          res.json(prepareLowerArchwiresTemplates)
        })
        .catch((err) => {
          const error = new Error(err)
          error.httpStatusCode = 500
          return next(error)
        })
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.getLowerArchwiresTemplateById = (req, res, next) => {
  const userId = sanitize(req.query.userId)
  const lowerArchwiresTemplateId = sanitize(req.params.id)
  User.findById(userId)
    .populate('lowerArchwiresTemplates.lowerArchwiresTemplate')
    .then((user) => {
      const { lowerArchwiresTemplate } = user.lowerArchwiresTemplates.find((template) => {
        return template.lowerArchwiresTemplate._id.toString() === lowerArchwiresTemplateId
      })
      if (lowerArchwiresTemplate) {
        res.json(lowerArchwiresTemplate)
      } else {
        res.status(404).send({ message: 'No template with ID found.' })
      }
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.postCreateLowerArchwiresTemplate = (req, res, next) => {
  const { userId, title, lowerArchwiresTemplate } = sanitize(req.body)
  LowerArchwiresTemplate.create({ userId, title, lowerArchwiresTemplate })
    .then((lowerArchwiresTemplate) => {
      User.findById(userId, (error, user) => {
        if (error) { return res.status(400).send(error) }
        if (!user) { return res.status(401).json({ status: 401, message: 'Unauthorized' }) }
        user.addToLowerArchwiresTemplates(lowerArchwiresTemplate._id)
      })
        .catch((err) => {
          const error = new Error(err)
          error.httpStatusCode = 500
          return next(error)
        })
      res.status(201).json({
        status: 201,
        message: 'Created template',
        templateId: lowerArchwiresTemplate._id
      })
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.deleteLowerArchwiresTemplateById = (req, res, next) => {
  const userId = sanitize(req.query.userId)
  const lowerArchwiresTemplateId = sanitize(req.params.id)
  LowerArchwiresTemplate.deleteOne({ _id: lowerArchwiresTemplateId })
    .then(() => {
      User.findById(userId, (error, user) => {
        if (error) { return res.status(400).send(error) }
        if (!user) { return res.status(401).json({ status: 401, message: 'Unauthorized' }) }
        const LowerArchwiresTemplate = user.lowerArchwiresTemplates.find((template) => {
          return template.lowerArchwiresTemplate._id.toString() === lowerArchwiresTemplateId
        })
        user.lowerArchwiresTemplates.pull({ _id: LowerArchwiresTemplate._id })
        user.save()
      })
        .then(() => {
          res.status(200).json({ status: 200, message: 'Template is deleted.' })
        })
        .catch((err) => {
          const error = new Error(err)
          error.httpStatusCode = 500
          return next(error)
        })
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}
