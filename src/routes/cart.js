const express = require('express');
const router = express.Router();

const CartController = require('../app/controllers/CartController');

router.post('/', CartController.index);

router.post('/count', CartController.count);

module.exports = router;
