const express = require('express');
const helper = require('../app/lib/helper');
const router = express.Router();

const ItemsController = require('../app/controllers/ItemsController');

router.get('/', ItemsController.index);

module.exports = router;