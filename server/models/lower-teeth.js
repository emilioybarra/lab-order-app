const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lowerTeethSchema = new Schema({
  lowerTeeth: {
    mandibularArchwires: {
    },
    remarks: {
    }
  },
  createdAt: Date
});

module.exports = mongoose.model('Lower Teeth', lowerTeethSchema);
