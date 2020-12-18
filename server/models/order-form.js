const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderFormSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    invoiceAddress: {
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
      postalCodeTown: {
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
      idVat: {
        type: String,
        required: false
      },
      statedOrthodontistName: {
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
    },
    patient: {
      lastName: {
        type: String,
        required: false
      },
      firstName: {
        type: String,
        required: false
      },
      number: {
        type: String,
        required: false
      },
      dateOfBonding: {
        type: String,
        required: false
      }
    },
    upperTeeth: {
      imageData: {
        type: String,
        required: false
      },
      onlySetup: {
        type: Boolean,
        required: false
      },
      boltonDiscrepancy: {
        type: Boolean,
        required: false
      },
      resolveCrowding: {
        type: Boolean,
        required: false
      },
      rcMm: {
        type: String,
        required: false
      },
      rcWhere: {
        type: String,
        required: false
      },
      reduceOverjet: {
        type: Boolean,
        required: false
      },
      roMm: {
        type: String,
        required: false
      },
      roWhere: {
        type: String,
        required: false
      }
    },
    lowerTeeth: {
      imageData: {
        type: String,
        required: false
      },
      onlySetup: {
        type: Boolean,
        required: false
      },
      boltonDiscrepancy: {
        type: Boolean,
        required: false
      },
      resolveCrowding: {
        type: Boolean,
        required: false
      },
      rcMm: {
        type: String,
        required: false
      },
      rcWhere: {
        type: String,
        required: false
      },
      reduceOverjet: {
        type: Boolean,
        required: false
      },
      roMm: {
        type: String,
        required: false
      },
      roWhere: {
        type: String,
        required: false
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Order Form', orderFormSchema);
