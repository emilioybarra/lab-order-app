const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    invoiceAddressTemplateData: {
      practice: {
        type: String,
        required: false
      },
      orthodontist: {
        type: String,
        required: false
      },
      address: {
        type: String,
        required: false
      },
      postalcodeTown: {
        type: String,
        required: false
      },
      telephone: {
        type: String,
        required: false
      },
      fax: {
        type: String,
        required: false
      },
      email: {
        type: String,
        required: false
      },
      ustId: {
        type: String,
        required: false
      },
      orthodontistInvoice: {
        type: Boolean,
        required: false
      },
      isShippingAddress: {
        type: Boolean,
        required: false
      },
      shippingAddress: {
        type: String,
        required: false
      },
      shippingPostalcodeTown: {
        type: String,
        required: false
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Invoice Address Template', invoiceAddressTemplateSchema);
