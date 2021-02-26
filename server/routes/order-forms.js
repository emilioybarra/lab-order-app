const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer()
const orderFormsController = require('../controllers/order-forms')

router.get('', orderFormsController.getAllOrderForms)
router.get('/:id', orderFormsController.getOrderFormById)
router.post('/order-form', upload.any(), orderFormsController.postCreateOrderForm)

module.exports = router
