const express = require('express');
const router = express.Router();

const ErrorController = require('../components/error/error.controller');
const AuthController = require('../components/auth/auth.controller');

router.post('/auth', AuthController.handleCheckAuthorization);
router.post('/auth/ban', AuthController.handleBanUser);
router.post('/auth/unban', AuthController.handleUnbanUser);

router.use(ErrorController.handleNotFoundError);

module.exports = router;
