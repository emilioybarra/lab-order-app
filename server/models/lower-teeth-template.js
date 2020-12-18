const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lowerTeethTemplateSchema = new Schema(
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
    lowerTeethTemplate: {
      imageData: {
        type: String,
        required: false
      },
      onlySetup: {
        type: Boolean,
        required: false
      },
      boltonDiscrepancy: {
        type: Boolean,
        required: false
      },
      resolveCrowding: {
        type: Boolean,
        required: false
      },
      rcMm: {
        type: String,
        required: false
      },
      rcWhere: {
        type: String,
        required: false
      },
      reduceOverjet: {
        type: Boolean,
        required: false
      },
      roMm: {
        type: String,
        required: false
      },
      roWhere: {
        type: String,
        required: false
      },
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

module.exports = mongoose.model('Lower Teeth Template', lowerTeethTemplateSchema);
