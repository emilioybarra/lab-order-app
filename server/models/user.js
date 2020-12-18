const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
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
        upperTeethFormTemplate: {
          type: Schema.Types.ObjectId,
          ref: 'Upper Teeth Template',
          required: false
        }
      }
    ],
    lowerTeethTemplates: [
      {
        lowerTeethFormTemplate: {
          type: Schema.Types.ObjectId,
          ref: 'Lower Teeth Template',
          required: false
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

userSchema.methods.addToOrderFormHistory = function (orderFormId) {
  const orderForms = [ ...this.orderForms ];
  orderForms.push({ orderForm: orderFormId });
  this.orderForms = orderForms;
  return this.save();
};

userSchema.methods.addToInvoiceAddressTemplates = function (invoiceAddressTemplateId) {
  const invoiceAddressTemplates = [ ...this.invoiceAddressTemplates ];
  invoiceAddressTemplates.push({ invoiceAddressTemplate: invoiceAddressTemplateId });
  this.invoiceAddressTemplates = invoiceAddressTemplates;
  return this.save();
};

userSchema.methods.addToUpperTeethTemplates = function (upperTeethTemplateId) {
  const upperTeethTemplates = [ ...this.upperTeethTemplates ];
  upperTeethTemplates.push({ upperTeethTemplate: upperTeethTemplateId });
  this.upperTeethTemplates = upperTeethTemplates;
  return this.save();
};

userSchema.methods.addToLowerTeethTemplates = function (lowerTeethTemplateId) {
  const lowerTeethTemplates = [ ...this.lowerTeethTemplates ];
  lowerTeethTemplates.push({ lowerTeethTemplate: lowerTeethTemplateId });
  this.lowerTeethTemplates = lowerTeethTemplates;
  return this.save();
};

module.exports = mongoose.model('User', userSchema);
