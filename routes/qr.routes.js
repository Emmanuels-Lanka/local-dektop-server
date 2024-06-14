const express = require('express');
const router = express.Router();

const controller = require('../controllers/qr.controllers');

router.post('/', controller.getQrData);

module.exports = router;