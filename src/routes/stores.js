const express = require('express');
const helper = require('../app/lib/helper');
const router = express.Router();

const StoresController = require('../app/controllers/StoresController');

router.get('/', StoresController.index);

module.exports = router;