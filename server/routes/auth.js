const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.get('/user/:hashedWordpressUser', authController.getAuthenticatedUser);

module.exports = router;
