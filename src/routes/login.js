const express = require('express');
const router = express.Router();


const LoginController = require('../app/controllers/LoginController');

router.post('/', LoginController.index);

module.exports = router;
