const sanitize = require('mongo-sanitize')
const User = require('../models/user')
const InvoiceAddressTemplate = require('../models/invoice-address-template')
const UpperTeethTemplate = require('../models/upper-teeth-template')
const LowerTeethTemplate = require('../models/lower-teeth-template')

// Invoice Address Templates

exports.getAllInvoiceAddressTemplates = (req, res, next) => {
  const perPage = 5
  const userId = sanitize(req.query.userId)
  let currentPage = sanitize(req.query.page) || 1
  let totalTemplates
  User.findById(userId)
    .then(() => {
      let prepareInvoiceAddressTemplates = {
        templates: [],
        totalTemplates: 0
      }
      InvoiceAddressTemplate.find({ userId })
        .countDocuments()
        .then((count) => {
          totalTemplates = count
          return InvoiceAddressTemplate.find({ userId })
            .skip((currentPage - 1) * perPage)
            .limit(perPage)
        })
        .then((templates) => {
          if (!templates.length) {
            currentPage = 1
            return InvoiceAddressTemplate.find({ userId })
              .skip((currentPage - 1) * perPage)
              .limit(perPage)
          }
          return templates
        })
        .then((templates) => {
          prepareInvoiceAddressTemplates = {
            templates,
            totalTemplates,
            currentPage: parseInt(currentPage)
          }
          res.json(prepareInvoiceAddressTemplates)
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

exports.getInvoiceAddressTemplateById = (req, res, next) => {
  const userId = sanitize(req.query.userId)
  const invoiceAddressTemplateId = sanitize(req.params.id)
  User.findById(userId)
    .populate('invoiceAddressTemplates.invoiceAddressTemplate')
    .then((user) => {
      const templateData = user.invoiceAddressTemplates.find((template) => {
        return template.invoiceAddressTemplate._id.toString() === invoiceAddressTemplateId
      })
      if (templateData) {
        res.json(templateData)
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

exports.postCreateInvoiceAddressTemplate = (req, res, next) => {
  const { userId, templateData } = sanitize(req.body)
  InvoiceAddressTemplate.create({ userId, ...templateData })
    .then((invoiceAddressTemplate) => {
      User.findById(userId, (error, user) => {
        if (error) { return res.status(400).send(error) }
        if (!user) { return res.status(401).json({ status: 401, message: 'Unauthorized' }) }
        user.addToInvoiceAddressTemplates(invoiceAddressTemplate._id)
      })
        .catch((err) => {
          const error = new Error(err)
          error.httpStatusCode = 500
          return next(error)
        })
      res.status(201).json({
        status: 201,
        message: 'Created template',
        templateId: invoiceAddressTemplate._id
      })
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.deleteInvoiceAddressTemplateById = (req, res, next) => {
  const userId = sanitize(req.query.userId)
  const invoiceAddressTemplateId = sanitize(req.params.id)
  InvoiceAddressTemplate.deleteOne({ _id: invoiceAddressTemplateId })
    .then(() => {
      User.findById(userId, (error, user) => {
        if (error) { return res.status(400).send(error) }
        if (!user) { return res.status(401).json({ status: 401, message: 'Unauthorized' }) }
        const invoiceAddressTemplate = user.invoiceAddressTemplates.find((template) => {
          return template.invoiceAddressTemplate._id.toString() === invoiceAddressTemplateId
        })
        user.invoiceAddressTemplates.pull({ _id: invoiceAddressTemplate._id })
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

// Upper Teeth Templates

exports.getAllUpperTeethTemplates = (req, res, next) => {
  const perPage = 5
  const userId = sanitize(req.query.userId)
  let currentPage = sanitize(req.query.page) || 1
  let totalTemplates
  User.findById(userId)
    .then(() => {
      let prepareUpperTeethTemplates = {
        templates: [],
        totalTemplates: 0
      }
      UpperTeethTemplate.find({ userId })
        .countDocuments()
        .then((count) => {
          totalTemplates = count
          return UpperTeethTemplate.find({ userId })
            .skip((currentPage - 1) * perPage)
            .limit(perPage)
        })
        .then((templates) => {
          if (!templates.length) {
            currentPage = 1
            return UpperTeethTemplate.find({ userId })
              .skip((currentPage - 1) * perPage)
              .limit(perPage)
          }

          return templates
        })
        .then((templates) => {
          prepareUpperTeethTemplates = {
            templates,
            totalTemplates,
            currentPage: parseInt(currentPage)
          }
          res.json(prepareUpperTeethTemplates)
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

exports.getUpperTeethTemplateById = (req, res, next) => {
  const userId = sanitize(req.query.userId)
  const upperTeethTemplateId = sanitize(req.params.id)
  User.findById(userId)
    .populate('upperTeethTemplates.upperTeethTemplate')
    .then((user) => {
      const templateData = user.upperTeethTemplates.find((template) => {
        return template.upperTeethTemplate._id.toString() === upperTeethTemplateId
      })
      if (templateData) {
        res.json(templateData)
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

exports.postCreateUpperTeethTemplate = (req, res, next) => {
  const { userId, templateData } = sanitize(req.body)
  UpperTeethTemplate.create({ userId, ...templateData })
    .then((upperTeethTemplate) => {
      User.findById(userId, (error, user) => {
        if (error) { return res.status(400).send(error) }
        if (!user) { return res.status(401).json({ status: 401, message: 'Unauthorized' }) }
        user.addToUpperTeethTemplates(upperTeethTemplate._id)
      })
        .catch((err) => {
          const error = new Error(err)
          error.httpStatusCode = 500
          return next(error)
        })
      res.status(201).json({
        status: 201,
        message: 'Created template',
        templateId: upperTeethTemplate._id
      })
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.deleteUpperTeethTemplateById = (req, res, next) => {
  const userId = sanitize(req.query.userId)
  const upperTeethTemplateId = sanitize(req.params.id)
  UpperTeethTemplate.deleteOne({ _id: upperTeethTemplateId })
    .then(() => {
      User.findById(userId, (error, user) => {
        if (error) { return res.status(400).send(error) }
        if (!user) { return res.status(401).json({ status: 401, message: 'Unauthorized' }) }
        const upperTeethTemplate = user.upperTeethTemplates.find((template) => {
          return template.upperTeethTemplate._id.toString() === upperTeethTemplateId
        })
        user.upperTeethTemplates.pull({ _id: upperTeethTemplate._id })
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

// Lower Teeth Templates

exports.getAllLowerTeethTemplates = (req, res, next) => {
  const perPage = 5
  const userId = sanitize(req.query.userId)
  let currentPage = sanitize(req.query.page) || 1
  let totalTemplates
  User.findById(userId)
    .then(() => {
      let prepareLowerTeethTemplates = {
        templates: [],
        totalTemplates: 0
      }
      LowerTeethTemplate.find({ userId })
        .countDocuments()
        .then((count) => {
          totalTemplates = count
          return LowerTeethTemplate.find({ userId })
            .skip((currentPage - 1) * perPage)
            .limit(perPage)
        })
        .then((templates) => {
          if (!templates.length) {
            currentPage = 1
            return LowerTeethTemplate.find({ userId })
              .skip((currentPage - 1) * perPage)
              .limit(perPage)
          }
          return templates
        })
        .then((templates) => {
          prepareLowerTeethTemplates = {
            templates,
            totalTemplates,
            currentPage: parseInt(currentPage)
          }
          res.json(prepareLowerTeethTemplates)
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

exports.getLowerTeethTemplateById = (req, res, next) => {
  const userId = sanitize(req.query.userId)
  const lowerTeethTemplateId = sanitize(req.params.id)
  User.findById(userId)
    .populate('lowerTeethTemplates.lowerTeethTemplate')
    .then((user) => {
      const templateData = user.lowerTeethTemplates.find((template) => {
        return template.lowerTeethTemplate._id.toString() === lowerTeethTemplateId
      })
      if (templateData) {
        res.json(templateData)
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

exports.postCreateLowerTeethTemplate = (req, res, next) => {
  const { userId, templateData } = sanitize(req.body)
  LowerTeethTemplate.create({ userId, ...templateData })
    .then((lowerTeethTemplate) => {
      User.findById(userId, (error, user) => {
        if (error) { return res.status(400).send(error) }
        if (!user) { return res.status(401).json({ status: 401, message: 'Unauthorized' }) }
        user.addToLowerTeethTemplates(lowerTeethTemplate._id)
      })
        .catch((err) => {
          const error = new Error(err)
          error.httpStatusCode = 500
          return next(error)
        })
      res.status(201).json({
        status: 201,
        message: 'Created template',
        templateId: lowerTeethTemplate._id
      })
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.deleteLowerTeethTemplateById = (req, res, next) => {
  const userId = sanitize(req.query.userId)
  const lowerTeethTemplateId = sanitize(req.params.id)
  LowerTeethTemplate.deleteOne({ _id: lowerTeethTemplateId })
    .then(() => {
      User.findById(userId, (error, user) => {
        if (error) { return res.status(400).send(error) }
        if (!user) { return res.status(401).json({ status: 401, message: 'Unauthorized' }) }
        const lowerTeethTemplate = user.lowerTeethTemplates.find((template) => {
          return template.lowerTeethTemplate._id.toString() === lowerTeethTemplateId
        })
        user.lowerTeethTemplates.pull({ _id: lowerTeethTemplate._id })
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
