const GET = require('../../config/db/khachhangs');

class KhachhangsController {
    //[GET] /khachhangs
    async index(req, res) {
        const data = await GET.GET_KHACHHANGS();
        res.json(data);
    }

    async id(req, res) {
        const data = await GET.GET_KHACHHANGS(req.body.ID_KHACHHANG);
        res.json(data);
    }
}

module.exports = new KhachhangsController();
