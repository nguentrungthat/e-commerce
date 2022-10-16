const express = require('express');
const router = express.Router();

const DashboardController = require('../app/controllers/DashboardController');

router.get('/', DashboardController.index);

module.exports = router;
