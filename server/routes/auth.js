const path = require('path');
const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/user/:hashedWordpressUser', authController.getAuthenticatedUser);

module.exports = router;
