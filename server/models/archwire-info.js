const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const archwireInfoSchema = new Schema(
  {
    archwireInfo: {
      remarks: {
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Archwire Info', archwireInfoSchema);
