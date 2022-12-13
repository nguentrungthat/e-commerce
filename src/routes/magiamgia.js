const express = require('express');
const router = express.Router();

const MaGiamGiaController = require('../app/controllers/MaGiamGiaController');

router.get('/', MaGiamGiaController.index);

router.post('/create', MaGiamGiaController.create);

router.post('/update', MaGiamGiaController.update);

router.post('/delete', MaGiamGiaController.delete);

router.post('/mgg', MaGiamGiaController.mgg);

module.exports = router;
