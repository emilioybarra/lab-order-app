const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.get('/admin', authController.getAuthenticatedAdmin)
router.post('/admin/login', authController.postLoginAdmin)
router.post('/admin/logout', authController.postLogoutAdmin)

router.get('/user/:hashedWordpressUser', authController.getAuthenticatedUser)

module.exports = router
