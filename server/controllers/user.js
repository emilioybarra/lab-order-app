const User = require('../models/user')
const OrderForm = require('../models/order-form')
const InvoiceAddressTemplate = require('../models/invoice-address-template')

exports.postCreateUpperTeeth = (req, res, next) => {
  const { maxillaryArchwires, remarks } = req.body
}

exports.postCreateLowerTeeth = (req, res, next) => {
  const { mandibularArchwires, remarks } = req.body
}
