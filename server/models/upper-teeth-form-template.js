const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const upperTeethFormTemplateSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  upperTeethFormTemplate: {
    maxillaryArchwires: {
    },
    remarks: {
    }
  }
});

module.exports = mongoose.model('Upper Teeth Form Template', upperTeethFormTemplateSchema);
