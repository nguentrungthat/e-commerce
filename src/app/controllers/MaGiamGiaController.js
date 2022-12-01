const GET = require('../../config/db/magiamgia');

class MaGiamGiaController {
    //[GET] /MAGIAMGIA
    async index(req, res) {
        const data = await GET.MAGIAMGIA();
        res.json(data);
    }
}

module.exports = new MaGiamGiaController();
