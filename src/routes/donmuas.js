const express = require('express');
const router = express.Router();

const DonMuasController = require('../app/controllers/DonmuasController');

router.get('/', DonMuasController.index);

router.post('/id', DonMuasController.id);

router.get('/top', DonMuasController.top);

module.exports = router;
