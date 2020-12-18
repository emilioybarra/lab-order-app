const express = require('express');
const router = express.Router();
const templatesController = require('../controllers/templates');

router.get('/invoice-address', templatesController.getAllInvoiceAddressTemplates);
router.get('/invoice-address/:id', templatesController.getInvoiceAddressTemplateById);
router.post('/invoice-address', templatesController.postCreateInvoiceAddressTemplate);
router.delete('/invoice-address/:id', templatesController.deleteInvoiceAddressTemplateById);

router.get('/upper-teeth', templatesController.getAllInvoiceAddressTemplates);
router.get('/upper-teeth/:id', templatesController.getInvoiceAddressTemplateById);
router.post('/upper-teeth', templatesController.postCreateInvoiceAddressTemplate);
router.delete('/upper-teeth/:id', templatesController.deleteInvoiceAddressTemplateById);

router.get('/lower-teeth', templatesController.getAllInvoiceAddressTemplates);
router.get('/lower-teeth/:id', templatesController.getInvoiceAddressTemplateById);
router.post('/lower-teeth', templatesController.postCreateInvoiceAddressTemplate);
router.delete('/lower-teeth/:id', templatesController.deleteInvoiceAddressTemplateById);

module.exports = router;
