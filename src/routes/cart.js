const express = require('express');
const router = express.Router();

const CartController = require('../app/controllers/CartController');

router.post('/', CartController.index);

router.post('/count', CartController.count);

router.post('/add', CartController.add);

router.post('/delete', CartController.delete);

router.post('/update', CartController.update);

module.exports = router;
