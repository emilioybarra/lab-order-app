const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lowerTeethFormTemplateSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    lowerTeethFormTemplate: {
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

module.exports = mongoose.model('Lower Teeth Form Template', lowerTeethFormTemplateSchema);
