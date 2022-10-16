const rating = require('../../config/db/rating');

class RatingController {
    //GET /rating
    async index(req, res, next) {
        const listItem = await rating.GET_IDVATPHAM();
        var data = [];
        for (var item of listItem) {
            const listRating = await rating.GET_RATING(item.VATPHAM);
            var sum = 0;
            for (var rate of listRating) {
                sum += rate.RATING;
            }
            const average = Math.ceil((sum / listRating.length) * 10) / 10;
            const ratingItem = { ID_VATPHAM: item.VATPHAM, RATING: average, QUALITY: listRating.length };
            data.push(ratingItem);
        }
        res.json(data);
    }

    async id(req, res, next) {
        const id = req.body.ID_VATPHAM;
        const listRating = await rating.GET_RATING(id);
        var sum = 0;
        for (var rate of listRating) {
            sum += rate.RATING;
        }
        const average = Math.ceil((sum / listRating.length) * 10) / 10;
        const ratingItem = { ID_VATPHAM: id, RATING: average, QUALITY: listRating.length };
        res.json(ratingItem);
    }
}

module.exports = new RatingController();
