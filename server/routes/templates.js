const express = require('express')
const router = express.Router()
const templatesController = require('../controllers/templates')
const archwiresController = require('../controllers/archwires-templates')

router.get('/invoice-address', templatesController.getAllInvoiceAddressTemplates)
router.get('/invoice-address/:id', templatesController.getInvoiceAddressTemplateById)
router.post('/invoice-address', templatesController.postCreateInvoiceAddressTemplate)
router.delete('/invoice-address/:id', templatesController.deleteInvoiceAddressTemplateById)

router.get('/upper-teeth', templatesController.getAllUpperTeethTemplates)
router.get('/upper-archwires', archwiresController.getAllUpperArchwiresTemplates)
router.get('/upper-teeth/:id', templatesController.getUpperTeethTemplateById)
router.get('/upper-archwires/:id', archwiresController.getUpperArchwiresTemplateById)
router.post('/upper-teeth', templatesController.postCreateUpperTeethTemplate)
router.post('/upper-archwires', archwiresController.postCreateUpperArchwiresTemplate)
router.delete('/upper-teeth/:id', templatesController.deleteUpperTeethTemplateById)
router.delete('/upper-archwires/:id', archwiresController.deleteUpperArchwiresTemplateById)

router.get('/lower-teeth', templatesController.getAllLowerTeethTemplates)
router.get('/lower-archwires', archwiresController.getAllLowerArchwiresTemplates)
router.get('/lower-teeth/:id', templatesController.getLowerTeethTemplateById)
router.get('/lower-archwires/:id', archwiresController.getLowerArchwiresTemplateById)
router.post('/lower-teeth', templatesController.postCreateLowerTeethTemplate)
router.post('/lower-archwires', archwiresController.postCreateLowerArchwiresTemplate)
router.delete('/lower-teeth/:id', templatesController.deleteLowerTeethTemplateById)
router.delete('/lower-archwires/:id', archwiresController.deleteLowerArchwiresTemplateById)

module.exports = router
