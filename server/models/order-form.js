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
        size12: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size14: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size16: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size16x22: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size16x24: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size16x24EET: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size16x24ET: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size17x25: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size18: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size18x18: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size18x25_1: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size18x25_2: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size18x25_3: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size18x25red: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size175x175: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        }
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
        upper_10: String
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
        size12: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size14: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size16: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size16x22: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size16x24: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size16x24EET: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size16x24ET: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size17x25: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size18: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size18x18: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size18x25_1: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size18x25_2: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size18x25_3: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size18x25red: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        },
        size175x175: {
          straight: { size: String },
          individual: { size: String },
          compression: { size: String },
          expansion: { size: String }
        }
      },
      teethBoxes: {
        lower_1: String,
        lower_2: String,
        lower_3: String,
        lower_4: String,
        lower_5: String,
        lower_6: String,
        lower_7: String,
        lower_8: String,
        lower_9: String,
        lower_10: String
      }
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Order Form', orderFormSchema)
