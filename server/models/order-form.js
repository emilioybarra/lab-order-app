const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderFormSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  patientId: {
    type: Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
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
  postalCode: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  telephone: {
    type: String,
    required: false
  },
  telefax: {
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
  createdAt: Date
});

module.exports = mongoose.model('Order Form', orderFormSchema);
