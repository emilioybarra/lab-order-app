const express = require('express');
const { check, body } = require('express-validator');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/invoice-address', userController.getAllInvoiceAddressTemplates);
router.get('/invoice-address/:id', userController.getInvoiceAddressTemplateById);

router.post('/invoice-address', userController.postCreateInvoiceAddressTemplate);

router.delete('/invoice-address/:id', userController.deleteInvoiceAddressTemplateById);

module.exports = router;
