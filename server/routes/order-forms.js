const express = require('express');
const router = express.Router();
const orderFormsController = require('../controllers/order-forms');

router.get('', orderFormsController.getAllOrderForms);
router.get('/order-form/:id', orderFormsController.getOrderFormById);
router.post('/order-form', orderFormsController.postCreateOrderForm);

module.exports = router;
