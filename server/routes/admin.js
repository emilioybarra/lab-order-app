const express = require('express')
const router = express.Router()
const orderFormsController = require('../controllers/admin')

router.get('/order-forms', orderFormsController.getAllOrderForms)
router.get('/order-forms/:orderFormId', orderFormsController.getOrderFormById)

module.exports = router
