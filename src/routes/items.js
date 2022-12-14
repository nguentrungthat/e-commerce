const express = require('express');
const router = express.Router();

const ItemsController = require('../app/controllers/ItemsController');

router.get('/', ItemsController.index);

router.post('/', ItemsController.index);

router.post('/images', ItemsController.images);

router.post('/id', ItemsController.id);

router.post('/recommend', ItemsController.recommend);

router.get('/getloai', ItemsController.getloai);

router.post('/create', ItemsController.create);

router.post('/delete', ItemsController.delete);

router.post('/update', ItemsController.update);

router.post('/loai', ItemsController.loai);

router.post('/search', ItemsController.search);

router.post('/add_file', ItemsController.add_file);

router.post('/xetduyet', ItemsController.xetduyet);

module.exports = router;
