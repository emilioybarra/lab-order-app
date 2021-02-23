const User = require('../models/user');
const OrderForm = require('../models/order-form');

exports.getAllOrderForms = (req, res, next) => {
  const perPage = 5;
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
  const userId = req.query.userId;
  const orderFormId = req.params.id;

  console.log(userId);
  if (userId) {
    User.findById(userId)
      .then(user => {
        console.log(user);
        OrderForm.findById(orderFormId)
          .then(orderForm => {
            console.log(orderForm);
            res.json(orderForm);
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
  } else {
    OrderForm.findById(orderFormId)
      .then(orderForm => {
        console.log(orderForm);
        res.json(orderForm);
      })
      .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
  }
};

exports.postCreateOrderForm = (req, res, next) => {
  const files = req.files;
  const orderFormData = { ...JSON.parse(JSON.stringify(req.body)) };
  const  { userId } = orderFormData;
  console.log(orderFormData);
  const upperTeethImage = files.find(file => file.fieldname === 'upperTeethImage');
  const lowerTeethImage = files.find(file => file.fieldname === 'lowerTeethImage');
  const prepareOrderFormData = { ...orderFormData };

  if (!!upperTeethImage) {
    prepareOrderFormData.upperTeeth.imageData = {
      data: upperTeethImage.buffer,
      contentType: upperTeethImage.mimetype,
      edited: true
    };
  } else {
    prepareOrderFormData.upperTeeth.imageData = {
      edited: false
    };
  }

  if (!!lowerTeethImage) {
    prepareOrderFormData.lowerTeeth.imageData = {
      data: lowerTeethImage.buffer,
      contentType: lowerTeethImage.mimetype,
      edited: true
    };
  } else {
    prepareOrderFormData.lowerTeeth.imageData = {
      edited: false
    };
  }

  OrderForm.create(prepareOrderFormData)
    .then(orderForm => {
      User.findById(userId, (error, user) => {
        user.addToOrderFormHistory(orderForm._id);
      })
        .then(() => {
          res.status(201).json({
            status: 201,
            message: 'Created order form',
            orderFormId: orderForm._id
          });
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
