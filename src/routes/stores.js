const express = require('express');
const helper = require('../app/lib/helper');
const router = express.Router();

const StoresController = require('../app/controllers/StoresController');

router.get('/', StoresController.index);

router.post('/create', StoresController.create);

router.post('/update', StoresController.update);

router.post('/delete', StoresController.delete);

module.exports = router;
