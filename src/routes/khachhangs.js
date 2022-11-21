const express = require('express');
const helper = require('../app/lib/helper');
const router = express.Router();

const KhachhangsController = require('../app/controllers/KhachhangsController');

router.get('/', KhachhangsController.index);

router.post('/id', KhachhangsController.id);

router.post('/account', KhachhangsController.account);

router.post('/pass', KhachhangsController.pass);

router.post('/changepass', KhachhangsController.changePass);

module.exports = router;
