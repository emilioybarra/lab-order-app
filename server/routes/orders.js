const express = require('express');
const { check, body } = require('express-validator');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/', userController.getAllOrderForms);

router.get('/:id', userController.getOrderFormById);

module.exports = router;
