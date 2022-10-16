const express = require('express');
const helper = require('../app/lib/helper');
const router = express.Router();

const ItemsController = require('../app/controllers/ItemsController');

router.get('/', ItemsController.index);

router.post('/images', ItemsController.images);

router.post('/id', ItemsController.id);

module.exports = router;
