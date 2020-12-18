const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const upperTeethTemplateSchema = new Schema(
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
    upperTeethTemplate: {
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
      maxillaryArchwires: {
      },
      remarks: {
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Upper Teeth Template', upperTeethTemplateSchema);
