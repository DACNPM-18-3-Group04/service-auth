const express = require('express');
const router = express.Router();

const { auth } = require('../../components/auth/auth.middleware');

router.post('/', auth);

module.exports = router;
