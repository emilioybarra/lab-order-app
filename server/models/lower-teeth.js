const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lowerTeethSchema = new Schema(
  {
    lowerTeeth: {
      mandibularArchwires: {
      },
      remarks: {
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Lower Teeth', lowerTeethSchema);
