const express = require('express');
const helper = require('../app/lib/helper');
const router = express.Router();

const KhachhangsController = require('../app/controllers/KhachhangsController');

router.get('/', KhachhangsController.index);

router.post('/id', KhachhangsController.id);

module.exports = router;
