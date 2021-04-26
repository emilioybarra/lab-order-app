const moment = require('moment')
const OrderForm = require('../models/order-form')

exports.getAllOrderForms = (req, res, next) => {
  let filters = {}
  const perPage = 10
  let currentPage = req.query.page || 1
  let totalOrderForms
  let prepareOrderForms = {
    orderForms: [],
    totalOrderForms: 0
  }

  if (req.query.searchQuery) {
    filters = {
      [req.query.searchKey]: { $regex: req.query.searchQuery, $options: 'i' }
    }
  }

  if (req.query.languageFilters) {
    filters = {
      orderFormLanguage: { $in: req.query.languageFilters.split('-') }
    }
  }

  if (req.query.dateFilters) {
    const dateFilters = JSON.parse(req.query.dateFilters)

    if (dateFilters.mode === 'date' && !!dateFilters.fromDate) {
      filters = {
        createdAt: {
          $gte: moment(dateFilters.fromDate).startOf('day').toDate(),
          $lte: moment(dateFilters.fromDate).endOf('day').toDate()
        }
      }
    }

    if (dateFilters.mode === 'dateRange' && !!dateFilters.fromDate && !!dateFilters.toDate) {
      filters = {
        createdAt: {
          $gte: moment(dateFilters.fromDate).startOf('day').toDate(),
          $lte: moment(dateFilters.toDate).endOf('day').toDate()
        }
      }
    }
  }

  OrderForm.find(filters)
    .sort({ createdAt: 'desc' })
    .countDocuments()
    .then((count) => {
      totalOrderForms = count
      return OrderForm.find(filters)
        .sort({ createdAt: 'desc' })
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
    })
    .then((orderForms) => {
      if (!orderForms.length) {
        currentPage = 1
        return OrderForm.find(filters)
          .sort({ createdAt: 'desc' })
          .skip((currentPage - 1) * perPage)
          .limit(perPage)
      }
      return orderForms
    })
    .then((orderForms) => {
      prepareOrderForms = {
        orderForms,
        totalOrderForms,
        currentPage: parseInt(currentPage)
      }
      res.json(prepareOrderForms)
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.getOrderFormById = (req, res, next) => {
  const orderFormId = req.params.orderFormId

  OrderForm.findById(orderFormId)
    .then((orderForm) => {
      res.json(orderForm)
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}
