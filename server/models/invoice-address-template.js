const mongoose = require('mongoose')
const Schema = mongoose.Schema

const invoiceAddressTemplateSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    invoiceAddressTemplate: {
      practice: String,
      orthodontist: String,
      address: String,
      postalcodeTown: String,
      telephone: String,
      fax: String,
      email: String,
      ustId: String,
      standardSetup: Boolean,
      standardSetupPlus: Boolean,
      premiumSetupPlus: Boolean,
      stateOrthodontistNameOnInvoice: Boolean,
      isShippingAddress: Boolean,
      shippingAddress: String,
      shippingPostalcodeTown: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Invoice Address Template', invoiceAddressTemplateSchema)
