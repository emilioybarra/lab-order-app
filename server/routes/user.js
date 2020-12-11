const express = require('express');
const { check, body } = require('express-validator');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/:hashedWordpressUser', userController.getUser);

module.exports = router;
