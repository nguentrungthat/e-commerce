const express = require('express');
const router = express.Router();

const DashboardController = require('../app/controllers/DashboardController');

router.get('/', DashboardController.index);

router.get('/doanhthu', DashboardController.doanhthu);

router.get('/khachhang', DashboardController.khachhang);

router.get('/donmua', DashboardController.donmua);

router.get('/topdonmua', DashboardController.topdonmua);

router.get('/topsanpham', DashboardController.topsanpham);

router.post('/doanhthu', DashboardController.doanhthu);

router.post('/donmua', DashboardController.donmua);

router.post('/topdonmua', DashboardController.topdonmua);

router.post('/topsanpham', DashboardController.topsanpham);

module.exports = router;
