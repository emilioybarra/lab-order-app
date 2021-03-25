require('dotenv').config()
const crypto = require('crypto')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

/**
 *  Password Hasher for creating a new admin
 *
 * const passwordHasher = (password) => {
 *   return {
 *     hash: crypto.pbkdf2Sync(password, process.env.HASH_SECRET, 1000, 64, `sha512`).toString(`hex`)
 *   }
 * }
 **/

const JsonFormatter = {
  stringify (cipherParams) {
    const jsonObj = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) }
    if (cipherParams.iv) { jsonObj.iv = cipherParams.iv.toString() }
    if (cipherParams.salt) { jsonObj.s = cipherParams.salt.toString() }
    return JSON.stringify(jsonObj)
  },
  parse (jsonStr) {
    const jsonObj = JSON.parse(jsonStr)
    const cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
    })
    if (jsonObj.iv) { cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv) }
    if (jsonObj.s) { cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s) }
    return cipherParams
  }
}

const adminSchema = mongoose.Schema(
  {
    token: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: 'admin'
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: 1
    },
    hash: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

adminSchema.methods.comparePassword = function (adminPassword, cb) {
  const decryptedPassword = CryptoJS.AES.decrypt(JSON.parse(adminPassword), process.env.HASH_SECRET, {
    format: JsonFormatter
  })
  const hash = crypto.pbkdf2Sync(decryptedPassword.toString(CryptoJS.enc.Utf8), process.env.HASH_SECRET, 1000, 64, 'sha512').toString('hex')
  return cb(null, this.hash === hash)
}

adminSchema.methods.generateToken = function (cb) {
  const admin = this
  admin.token = jwt.sign({ id: admin._id.toHexString(), role: admin.role }, process.env.JWT_SECRET, { expiresIn: '12h' })
  admin.save((err, admin) => {
    if (err) { return cb(err) }
    cb(null, admin)
  })
}

module.exports = mongoose.model('Admin', adminSchema)
