require('dotenv').config()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    token: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: 'user'
    },
    wordpressUser: {
      type: String,
      required: true
    },
    orderForms: [
      {
        orderForm: {
          type: Schema.Types.ObjectId,
          ref: 'Order Form',
          required: false
        }
      }
    ],
    invoiceAddressTemplates: [
      {
        invoiceAddressTemplate: {
          type: Schema.Types.ObjectId,
          ref: 'Invoice Address Template',
          required: true
        }
      }
    ],
    upperTeethTemplates: [
      {
        upperTeethTemplate: {
          type: Schema.Types.ObjectId,
          ref: 'Upper Teeth Template',
          required: false
        }
      }
    ],
    lowerTeethTemplates: [
      {
        lowerTeethTemplate: {
          type: Schema.Types.ObjectId,
          ref: 'Lower Teeth Template',
          required: false
        }
      }
    ],
    upperArchwiresTemplates: [
      {
        upperArchwiresTemplate: {
          type: Schema.Types.ObjectId,
          ref: 'Upper Archwires Template',
          required: false
        }
      }
    ],
    lowerArchwiresTemplates: [
      {
        lowerArchwiresTemplate: {
          type: Schema.Types.ObjectId,
          ref: 'Lower Archwires Template',
          required: false
        }
      }
    ]
  },
  {
    timestamps: true
  }
)

userSchema.methods.generateToken = function (cb) {
  const user = this
  user.token = jwt.sign({ id: user._id.toHexString(), role: user.role }, process.env.JWT_SECRET, { expiresIn: '12h' })
  user.save((err, user) => {
    if (err) { return cb(err) }
    cb(null, user)
  })
}

userSchema.methods.addToOrderFormHistory = function (orderFormId) {
  const orderForms = [ ...this.orderForms ]
  orderForms.push({ orderForm: orderFormId })
  this.orderForms = orderForms
  return this.save()
}

userSchema.methods.addToInvoiceAddressTemplates = function (invoiceAddressTemplateId) {
  const invoiceAddressTemplates = [ ...this.invoiceAddressTemplates ]
  invoiceAddressTemplates.push({ invoiceAddressTemplate: invoiceAddressTemplateId })
  this.invoiceAddressTemplates = invoiceAddressTemplates
  return this.save()
}

userSchema.methods.addToUpperTeethTemplates = function (upperTeethTemplateId) {
  const upperTeethTemplates = [ ...this.upperTeethTemplates ]
  upperTeethTemplates.push({ upperTeethTemplate: upperTeethTemplateId })
  this.upperTeethTemplates = upperTeethTemplates
  return this.save()
}

userSchema.methods.addToLowerTeethTemplates = function (lowerTeethTemplateId) {
  const lowerTeethTemplates = [ ...this.lowerTeethTemplates ]
  lowerTeethTemplates.push({ lowerTeethTemplate: lowerTeethTemplateId })
  this.lowerTeethTemplates = lowerTeethTemplates
  return this.save()
}

userSchema.methods.addToUpperArchwiresTemplates = function (upperArchwiresTemplateId) {
  const upperArchwiresTemplates = [ ...this.upperArchwiresTemplates ]
  upperArchwiresTemplates.push({ upperArchwiresTemplate: upperArchwiresTemplateId })
  this.upperArchwiresTemplates = upperArchwiresTemplates
  return this.save()
}

userSchema.methods.addToLowerArchwiresTemplates = function (lowerArchwiresTemplateId) {
  const lowerArchwiresTemplates = [ ...this.lowerArchwiresTemplates ]
  lowerArchwiresTemplates.push({ lowerArchwiresTemplate: lowerArchwiresTemplateId })
  this.lowerArchwiresTemplates = lowerArchwiresTemplates
  return this.save()
}

module.exports = mongoose.model('User', userSchema)
