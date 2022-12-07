const express = require('express');
const router = express.Router();

const ThongKeController = require('../app/controllers/ThongKeController');

router.post('/', ThongKeController.index);

router.post('/vatpham', ThongKeController.vatpham);

module.exports = router;
