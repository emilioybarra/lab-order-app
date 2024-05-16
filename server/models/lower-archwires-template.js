const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lowerArchwiresTemplateSchema = new Schema(
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
    lowerArchwiresTemplate: {
      archwireSizes: {}
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Lower Archwires Template', lowerArchwiresTemplateSchema)
