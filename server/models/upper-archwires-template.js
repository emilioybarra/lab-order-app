const mongoose = require('mongoose')
const Schema = mongoose.Schema

const upperArchwiresTemplateSchema = new Schema(
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
    upperArchwiresTemplate: {
      archwireSizes: {}
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Upper Archwires Template', upperArchwiresTemplateSchema)
