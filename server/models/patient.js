const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  lastName: {
    type: String,
    required: false
  },
  firstName: {
    type: String,
    required: false
  },
  number: {
    type: Number,
    required: false
  },
  dateOfBonding: {
    type: String,
    required: false
  },
  upperTeeth: [
    {
      upperTeethId: {
        type: Schema.Types.ObjectId,
        ref: 'Upper Teeth',
        required: false
      }
    }
  ],
  lowerTeeth: [
    {
      lowerTeethId: {
        type: Schema.Types.ObjectId,
        ref: 'Lower Teeth',
        required: false
      }
    }
  ],
  archwireInfos: [
    {
      archwireInfoId: {
        type: Schema.Types.ObjectId,
        ref: 'Archwire Info',
        required: false
      }
    }
  ],
  createdAt: Date
});

module.exports = mongoose.model('Patient', patientSchema);
