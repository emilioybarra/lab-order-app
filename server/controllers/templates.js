const User = require('../models/user');
const InvoiceAddressTemplate = require('../models/invoice-address-template');

exports.getAllInvoiceAddressTemplates = (req, res, next) => {
  const perPage = 2;
  const userId = req.query.userId;
  let currentPage = req.query.page || 1;
  let totalTemplates;
  User.findById(userId)
    .then(() => {
      let prepareInvoiceAddressTemplates = {
        templates: [],
        totalTemplates: 0
      };
      InvoiceAddressTemplate.find({ userId })
        .countDocuments()
        .then(count => {
          totalTemplates = count;
          return InvoiceAddressTemplate.find({ userId })
            .skip((currentPage - 1) * perPage)
            .limit(perPage);
        })
        .then(templates => {
          if (!templates.length) {
            currentPage = 1;
            return InvoiceAddressTemplate.find({ userId })
              .skip((currentPage - 1) * perPage)
              .limit(perPage);
          }

          return templates;
        })
        .then(templates => {
          prepareInvoiceAddressTemplates = {
            templates,
            totalTemplates,
            currentPage: parseInt(currentPage)
          };
          res.json(prepareInvoiceAddressTemplates);
        })
        .catch(err => {
          const error = new Error(err);
          error.httpStatusCode = 500;
          return next(error);
        });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getInvoiceAddressTemplateById = (req, res, next) => {
  const userId = req.query.userId;
  const invoiceAddressTemplateId = req.params.id;
  User.findById(userId)
    .populate('invoiceAddressTemplates.invoiceAddressTemplate')
    .then(user => {
      const templateData = user.invoiceAddressTemplates.find(template => {
        return template.invoiceAddressTemplate._id.toString() === invoiceAddressTemplateId;
      });
      if (templateData) {
        res.json(templateData);
      } else {
        res.status(404).send({ message: 'No template with ID found.' });
      }
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCreateInvoiceAddressTemplate = (req, res, next) => {
  const { userId, templateData } = req.body;
  InvoiceAddressTemplate.create({ userId, ...templateData })
    .then(invoiceAddressTemplate => {
      User.findById(userId, (error, user) => {
        user.addToInvoiceAddressTemplates(invoiceAddressTemplate._id);
      })
        .catch(err => {
          const error = new Error(err);
          error.httpStatusCode = 500;
          return next(error);
        });
      res.status(201).json({
        message: 'Created template',
        templateId: invoiceAddressTemplate._id
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.deleteInvoiceAddressTemplateById = (req, res, next) => {
  const userId = req.query.userId;
  const invoiceAddressTemplateId = req.params.id;
  InvoiceAddressTemplate.deleteOne({ _id: invoiceAddressTemplateId })
    .then(result => {
      User.findById(userId, (error, user) => {
        const invoiceAddressTemplate = user.invoiceAddressTemplates.find(template => {
          return template.invoiceAddressTemplate._id.toString() === invoiceAddressTemplateId;
        });
        user.invoiceAddressTemplates.pull({ _id: invoiceAddressTemplate._id });
        user.save();
      })
        .catch(err => {
          const error = new Error(err);
          error.httpStatusCode = 500;
          return next(error);
        });
      res.status(204).json({ message: 'Template is deleted.' });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
