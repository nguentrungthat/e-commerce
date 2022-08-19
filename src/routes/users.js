const express = require('express');
const helper = require('../app/lib/helper');
const router = express.Router();

const UsersController = require('../app/controllers/UsersController');

//router.post('/create', UsersController.create);

router.post('/id', helper.authenticateToken, UsersController.id);

router.get('/', helper.authenticateToken, UsersController.index);




module.exports = router;
