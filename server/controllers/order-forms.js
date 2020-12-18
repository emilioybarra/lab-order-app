const User = require('../models/user');
const OrderForm = require('../models/order-form');

exports.getAllOrderForms = (req, res, next) => {
  const perPage = 2;
  const userId = req.query.userId;
  let currentPage = req.query.page || 1;
  let totalOrderForms;
  User.findById(userId)
    .then(() => {
      let prepareOrderForms = {
        orderForms: [],
        totalOrderForms: 0
      };
      OrderForm.find({ userId })
        .countDocuments()
        .then(count => {
          totalOrderForms = count;
          return OrderForm.find({ userId })
            .skip((currentPage - 1) * perPage)
            .limit(perPage);
        })
        .then(orderForms => {
          if (!orderForms.length) {
            currentPage = 1;
            return OrderForm.find({ userId })
              .skip((currentPage - 1) * perPage)
              .limit(perPage);
          }

          return orderForms;
        })
        .then(orderForms => {
          prepareOrderForms = {
            orderForms,
            totalOrderForms,
            currentPage: parseInt(currentPage)
          };
          res.json(prepareOrderForms);
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

exports.postCreateOrderForm = (req, res, next) => {
  const  { userId, invoiceAddress, patient, upperTeeth, lowerTeeth } = req.body;
  OrderForm.create({ userId, invoiceAddress, patient, upperTeeth, lowerTeeth })
    .then(orderForm => {
      User.findById(userId, (error, user) => {
        user.addToOrderFormHistory(orderForm._id);
      }).catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });

      res.status(201).json({
        message: 'Created order form',
        orderFormId: orderForm._id
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
