const express = require('express');
const { check, body } = require('express-validator');
const userController = require('../controllers/user');

const router = express.Router();

router.post('/create', userController.postCreatePatient);

module.exports = router;
