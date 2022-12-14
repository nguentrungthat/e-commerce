const express = require('express');
const router = express.Router();

const RatingController = require('../app/controllers/RatingController');

router.get('/', RatingController.index);

router.post('/id', RatingController.id);

router.post('/rating', RatingController.rating);

router.post('/rated', RatingController.rated);

module.exports = router;
