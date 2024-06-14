const express = require('express');
const router = express.Router();

const controller = require('../controllers/rfid.controllers');

router.post('/', controller.getRfidTags);

module.exports = router;