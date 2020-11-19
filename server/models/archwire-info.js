const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const archwireInfoSchema = new Schema({
  archwireInfo: {
    remarks: {
    }
  },
  createdAt: Date
});

module.exports = mongoose.model('Archwire Info', archwireInfoSchema);
