const express = require('express');
const router = express.Router();

const ThongKeController = require('../app/controllers/ThongKeController');

router.get('/', ThongKeController.index);

module.exports = router;
