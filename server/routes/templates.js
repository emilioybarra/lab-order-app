const express = require('express')
const router = express.Router()
const templatesController = require('../controllers/templates')

router.get('/invoice-address', templatesController.getAllInvoiceAddressTemplates)
router.get('/invoice-address/:id', templatesController.getInvoiceAddressTemplateById)
router.post('/invoice-address', templatesController.postCreateInvoiceAddressTemplate)
router.delete('/invoice-address/:id', templatesController.deleteInvoiceAddressTemplateById)

router.get('/upper-teeth', templatesController.getAllUpperTeethTemplates)
router.get('/upper-teeth/:id', templatesController.getUpperTeethTemplateById)
router.post('/upper-teeth', templatesController.postCreateUpperTeethTemplate)
router.delete('/upper-teeth/:id', templatesController.deleteUpperTeethTemplateById)

router.get('/lower-teeth', templatesController.getAllLowerTeethTemplates)
router.get('/lower-teeth/:id', templatesController.getLowerTeethTemplateById)
router.post('/lower-teeth', templatesController.postCreateLowerTeethTemplate)
router.delete('/lower-teeth/:id', templatesController.deleteLowerTeethTemplateById)

module.exports = router
