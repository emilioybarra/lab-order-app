const { validationResult } = require('express-validator');
const User = require('../models/user');
const Patient = require('../models/patient');
const OrderForm = require('../models/order-form');
const InvoiceAddressTemplate = require('../models/invoice-address-template');

exports.getAllOrderForms = (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId)
    .populate('orderForms.orderFormId')
    .exec()
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
  let currentPage = req.query.page || 1;
  const perPage = 2;
  let totalTemplates;
  User.findById('5fabcb28af4d835a8211137f')
    // .populate('invoiceAddressTemplates.invoiceAddressTemplate')
    .then(() => {
      let prepareInvoiceAddressTemplates = {
        templates: [],
        totalTemplates: 0
      };
      InvoiceAddressTemplate.find({ userId: '5fabcb28af4d835a8211137f' })
        .countDocuments()
        .then(count => {
          totalTemplates = count;
          return InvoiceAddressTemplate.find({ userId: '5fabcb28af4d835a8211137f' })
            .skip((currentPage - 1) * perPage)
            .limit(perPage);
        })
        .then(templates => {
          console.log(templates);
          console.log(totalTemplates);
          console.log(!templates.length);

          if (!templates.length) {
            currentPage = 1
            return InvoiceAddressTemplate.find({ userId: '5fabcb28af4d835a8211137f' })
              .skip((currentPage - 1) * perPage)
              .limit(perPage);
          }

          return templates
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

      /*
      prepareInvoiceAddressTemplates.templates = user.invoiceAddressTemplates.map(template => {
        return {
          title: template.invoiceAddressTemplate.title,
          id: template.invoiceAddressTemplate._id
        };
      });

       */
      // res.status(200).json(prepareInvoiceAddressTemplates);
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getInvoiceAddressTemplateById = (req, res, next) => {
  const invoiceAddressTemplateId = req.params.id;
  User.findById('5fabcb28af4d835a8211137f')
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
  console.log(req.body);
  const invoiceAddressTemplate = new InvoiceAddressTemplate({
    userId: '5fabcb28af4d835a8211137f',
    ...req.body
  });

  invoiceAddressTemplate.save()
    .then(result => {
      return User.findById('5fabcb28af4d835a8211137f');
    })
    .then(user => {
      user.addToInvoiceAddressTemplates(invoiceAddressTemplate._id);
      console.log('Created template');
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
  const invoiceAddressTemplateId = req.params.id;
  InvoiceAddressTemplate.findOneAndDelete({ _id: invoiceAddressTemplateId })
    .then(result => {
      return User.findById('5fabcb28af4d835a8211137f');
    })
    .then(user => {
      const invoiceAddressTemplate = user.invoiceAddressTemplates.find(template => {
        return template.invoiceAddressTemplate._id.toString() === invoiceAddressTemplateId;
      });
      user.invoiceAddressTemplates.pull({ _id: invoiceAddressTemplate._id });
      return user.save();
    })
    .then(result => {
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


exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false,
      hasError: true,
      product: {
        title: title,
        imageUrl: imageUrl,
        price: price,
        description: description
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  const product = new Product({
    // _id: new mongoose.Types.ObjectId('5badf72403fd8b5be0366e81'),
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.user
  });
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      // return res.status(500).render('admin/edit-product', {
      //   pageTitle: 'Add Product',
      //   path: '/admin/add-product',
      //   editing: false,
      //   hasError: true,
      //   product: {
      //     title: title,
      //     imageUrl: imageUrl,
      //     price: price,
      //     description: description
      //   },
      //   errorMessage: 'Database operation failed, please try again.',
      //   validationErrors: []
      // });
      // res.redirect('/500');
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product,
        hasError: false,
        errorMessage: null,
        validationErrors: []
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: true,
      hasError: true,
      product: {
        title: updatedTitle,
        imageUrl: updatedImageUrl,
        price: updatedPrice,
        description: updatedDesc,
        _id: prodId
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  Product.findById(prodId)
    .then(product => {
      if (product.userId.toString() !== req.user._id.toString()) {
        return res.redirect('/');
      }
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save().then(result => {
        console.log('UPDATED PRODUCT!');
        res.redirect('/admin/products');
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getProducts = (req, res, next) => {
  Product.find({ userId: req.user._id })
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then(products => {
      console.log(products);
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
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
