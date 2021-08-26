const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderFormSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    orderFormLanguage: String,
    invoiceAddress: {
      practice: String,
      orthodontist: String,
      address: String,
      postalCodeTown: String,
      telephone: String,
      fax: String,
      email: String,
      idVat: String,
      standardSetup: Boolean,
      standardSetupPlus: Boolean,
      premiumSetupPlus: Boolean,
      statedOrthodontistName: Boolean,
      isShippingAddress: Boolean,
      shippingAddress: String,
      shippingPostalcodeTown: String
    },
    patient: {
      lastName: String,
      firstName: String,
      number: String,
      dateOfBonding: String
    },
    upperTeeth: {
      imageData: {
        data: Buffer,
        contentType: String,
        edited: Boolean
      },
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
      archwireSizes: {
        size12: { straight: String, individual: String, compression: String, expansion: String },
        size14: { straight: String, individual: String, compression: String, expansion: String },
        size16: { straight: String, individual: String, compression: String, expansion: String },
        size16x22: { straight: String, individual: String, compression: String, expansion: String },
        size16x24: { straight: String, individual: String, compression: String, expansion: String },
        size16x24EET: { straight: String, individual: String, compression: String, expansion: String },
        size16x24ET: { straight: String, individual: String, compression: String, expansion: String },
        size17x25: { straight: String, individual: String, compression: String, expansion: String },
        size18: { straight: String, individual: String, compression: String, expansion: String },
        size18x18: { straight: String, individual: String, compression: String, expansion: String },
        size18x25_1: { straight: String, individual: String, compression: String, expansion: String },
        size18x25_2: { straight: String, individual: String, compression: String, expansion: String },
        size18x25_3: { straight: String, individual: String, compression: String, expansion: String },
        size18x25red: { straight: String, individual: String, compression: String, expansion: String },
        size175x175: { straight: String, individual: String, compression: String, expansion: String }
      },
      teethBoxes: {
        upper_1: String,
        upper_2: String,
        upper_3: String,
        upper_4: String,
        upper_5: String,
        upper_6: String,
        upper_7: String,
        upper_8: String,
        upper_9: String,
        upper_10: String,
        upper_11: String,
        upper_12: String,
        lower_1: String,
        lower_2: String,
        lower_3: String,
        lower_4: String,
        lower_5: String,
        lower_6: String,
        lower_7: String,
        lower_8: String,
        lower_9: String,
        lower_10: String,
        lower_11: String,
        lower_12: String
      }
    },
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
      notes2: String,
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
    },
    lowerTeeth: {
      imageData: {
        data: Buffer,
        contentType: String,
        edited: Boolean
      },
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
      archwireSizes: {
        size12: { straight: String, individual: String, compression: String, expansion: String },
        size14: { straight: String, individual: String, compression: String, expansion: String },
        size16: { straight: String, individual: String, compression: String, expansion: String },
        size16x22: { straight: String, individual: String, compression: String, expansion: String },
        size16x24: { straight: String, individual: String, compression: String, expansion: String },
        size16x24EET: { straight: String, individual: String, compression: String, expansion: String },
        size16x24ET: { straight: String, individual: String, compression: String, expansion: String },
        size17x25: { straight: String, individual: String, compression: String, expansion: String },
        size18: { straight: String, individual: String, compression: String, expansion: String },
        size18x18: { straight: String, individual: String, compression: String, expansion: String },
        size18x25_1: { straight: String, individual: String, compression: String, expansion: String },
        size18x25_2: { straight: String, individual: String, compression: String, expansion: String },
        size18x25_3: { straight: String, individual: String, compression: String, expansion: String },
        size18x25red: { straight: String, individual: String, compression: String, expansion: String },
        size175x175: { straight: String, individual: String, compression: String, expansion: String }
      },
      teethBoxes: {
        upper_1: String,
        upper_2: String,
        upper_3: String,
        upper_4: String,
        upper_5: String,
        upper_6: String,
        upper_7: String,
        upper_8: String,
        upper_9: String,
        upper_10: String,
        upper_11: String,
        upper_12: String,
        lower_1: String,
        lower_2: String,
        lower_3: String,
        lower_4: String,
        lower_5: String,
        lower_6: String,
        lower_7: String,
        lower_8: String,
        lower_9: String,
        lower_10: String,
        lower_11: String,
        lower_12: String
      }
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Order Form', orderFormSchema)
