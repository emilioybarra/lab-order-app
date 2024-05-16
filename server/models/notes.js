const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema(
  {
    notes: {
      threeDSetup: Boolean,
      tpa: Boolean,
      herbst: Boolean,
      bondableHGTube: Boolean,
      bondableHGTubeWithShell: Boolean,
      superpositionPhoto: Boolean,
      dlcSteelWire: Boolean,
      upperJaw: Boolean,
      lowerJaw: Boolean,
      notes1: String,
      noCorrectionOfBite: Boolean,
      nonTransparent: Boolean,
      trayTrimmed33: Boolean,
      transparent: Boolean,
      right2: {
        canine: Boolean,
        molar: Boolean
      },
      right3: {
        canine: Boolean,
        molar: Boolean
      },
      left2: {
        canine: Boolean,
        molar: Boolean
      },
      left3: {
        canine: Boolean,
        molar: Boolean
      }
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Note', noteSchema)
