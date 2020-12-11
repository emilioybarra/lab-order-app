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
          required: true
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
    upperTeethFormTemplates: [
      {
        upperTeethFormTemplate: {
          type: Schema.Types.ObjectId,
          ref: 'Upper Teeth Form Template',
          required: true
        }
      }
    ],
    lowerTeethFormTemplates: [
      {
        lowerTeethFormTemplate: {
          type: Schema.Types.ObjectId,
          ref: 'Lower Teeth Form Template',
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

userSchema.methods.addToOrderFormHistory = function (orderForm) {
  const orderForms = [ ...this.orderForms ];
  orderForms.push(orderForm);
  this.orderForms = orderForms;
  return this.save();
};

userSchema.methods.addToInvoiceAddressTemplates = function (invoiceAddressTemplateId) {
  const invoiceAddressTemplates = [ ...this.invoiceAddressTemplates ];
  invoiceAddressTemplates.push({ invoiceAddressTemplate: invoiceAddressTemplateId });
  this.invoiceAddressTemplates = invoiceAddressTemplates;
  return this.save();
};

userSchema.methods.addToUpperTeethFormTemplates = function (upperTeethFormTemplate) {
  const upperTeethFormTemplates = [ ...this.upperTeethFormTemplates ];
  upperTeethFormTemplates.push(upperTeethFormTemplate);
  this.upperTeethFormTemplates = upperTeethFormTemplates;
  return this.save();
};

userSchema.methods.addToLowerTeethFormTemplates = function (lowerTeethFormTemplate) {
  const lowerTeethFormTemplates = [ ...this.lowerTeethFormTemplates ];
  lowerTeethFormTemplates.push(lowerTeethFormTemplate);
  this.lowerTeethFormTemplates = lowerTeethFormTemplates;
  return this.save();
};

module.exports = mongoose.model('User', userSchema);
