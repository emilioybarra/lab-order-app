const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
      onlySetup: Boolean,
      boltonDiscrepancy: Boolean,
      resolveCrowding: Boolean,
      rcMm: String,
      rcWhere: String,
      reduceOverjet: Boolean,
      roMm: String,
      roWhere: String,
      notesStrippingMm: String,
      notesStrippingWhere: String,
      notesBoltonDiscrepancy: Boolean,
      notesBox: String,
      teethBoxes: Object,
      highlightedTeeth: Array
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Lower Teeth Template', lowerTeethTemplateSchema)
