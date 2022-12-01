const express = require('express');
const router = express.Router();

const MaGiamGiaController = require('../app/controllers/MaGiamGiaController');

router.get('/', MaGiamGiaController.index);

module.exports = router;
