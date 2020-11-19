const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const upperTeethSchema = new Schema({
  upperTeeth: {
    maxillaryArchwires: {
    },
    remarks: {
    }
  },
  createdAt: Date
});

module.exports = mongoose.model('Upper Teeth', upperTeethSchema);
