const express = require('express');
const router = express.Router();

const DashboardController = require('../app/controllers/DashboardController');

router.get('/', DashboardController.index);

router.get('/doanhthu', DashboardController.doanhthu);

router.get('/khachhang', DashboardController.khachhang);

router.get('/donmua', DashboardController.donmua);

module.exports = router;
