require('dotenv').config()
const crypto = require('crypto')
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
  const hash = crypto.pbkdf2Sync(adminPassword, process.env.HASH_SECRET, 1000, 64, 'sha512').toString('hex')
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
