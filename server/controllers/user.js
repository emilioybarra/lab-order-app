const { validationResult } = require('express-validator');
const User = require('../models/user');
const Patient = require('../models/patient');
const OrderForm = require('../models/order-form');
const InvoiceAddressTemplate = require('../models/invoice-address-template');

exports.getUser = (req, res, next) => {
  const hashedWordpressUser = req.params.hashedWordpressUser;
  console.log('fired');
  console.log(hashedWordpressUser);

  User.exists({ wordpressUser: hashedWordpressUser })
    .then(userExists => {
      console.log(userExists);
      if (userExists) {
        User.findOne({ wordpressUser: hashedWordpressUser })
          .then(user => {
            console.log(user);
            res.status(200).json(user);
          })
          .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
          });
      } else {
        User.create({
          wordpressUser: hashedWordpressUser,
          orderForms: [],
          invoiceAddressTemplates: [],
          upperTeethFormTemplates: [],
          lowerTeethFormTemplates: []
        })
          .then(user => {
            console.log(user);
            res.status(200).json(user);
          })
          .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
          });
      }
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};


exports.getAllOrderForms = (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId)
    .populate('orderForms.orderFormId')
    .then(user => {
      res.status(200).json(user.orderForms);
    })
    .catch(err => {
      const error = new Error(err);

      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getOrderFormById = (req, res, next) => {
  const userId = req.body.userId;
  const orderFormId = req.params.orderFormId;
  User.findById(userId)
    .then(user => {
      OrderForm.findById(orderFormId)
        .then(orderForm => {
          return orderForm;
        })
        .catch(err => {
          const error = new Error(err);
          error.httpStatusCode = 500;
          return next(error);
        });
      res.send(user.orderForms);
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

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
      console.log(user.invoiceAddressTemplates);
      const templateData = user.invoiceAddressTemplates.find(template => {
        return template.invoiceAddressTemplate._id.toString() === invoiceAddressTemplateId;
      });
      console.log('templateData', templateData);
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
  const invoiceAddressTemplate = new InvoiceAddressTemplate({
    userId,
    ...templateData
  });

  invoiceAddressTemplate.save()
    .then(result => {
      return User.findById(userId)
        .catch(err => {
          const error = new Error(err);
          error.httpStatusCode = 500;
          return next(error);
        });
    })
    .then(user => {
      user.addToInvoiceAddressTemplates(invoiceAddressTemplate._id);
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
      return User.findById(userId);
    })
    .then(user => {
      const invoiceAddressTemplate = user.invoiceAddressTemplates.find(template => {
        return template.invoiceAddressTemplate._id.toString() === invoiceAddressTemplateId;
      });
      user.invoiceAddressTemplates.pull({ _id: invoiceAddressTemplate._id });
      return user.save();
    })
    .then(() => {
      res.status(204).json({ message: 'Template is deleted.' });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCreatePatient = (req, res, next) => {
  const { lastName, firstName, number, dateOfBonding } = req.body;
  const patient = new Patient({
    lastName,
    firstName,
    number,
    dateOfBonding,
    createdAt: Date.now()
  });

  patient.save()
    .then(result => {
      console.log(result);
      console.log('Created Patient');
      res.status(201).json({
        message: 'Created Patient',
        patientId: result._id
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postCreateUpperTeeth = (req, res, next) => {
  const { maxillaryArchwires, remarks } = req.body;
};

exports.postCreateLowerTeeth = (req, res, next) => {
  const { mandibularArchwires, remarks } = req.body;
};

exports.postCreateOrder = (req, res, next) => {
  const {
    userId,
    patientId,
    practice,
    orthodontist,
    address,
    postalCode,
    city,
    telephone,
    telefax,
    email,
    idVat,
    statedOrthodontistName
  } = req.body;

  const order = new OrderForm({
    userId,
    patientId,
    practice,
    orthodontist,
    address,
    postalCode,
    city,
    telephone,
    telefax,
    email,
    idVat,
    statedOrthodontistName,
    createdAt: Date.now()
  });

  order.save()
    .then(result => {
      console.log(result);
      console.log('Created Order');
      res.status(201).json({
        message: 'Created Order'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteOne({ _id: prodId, userId: req.user._id })
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
