const GET = require('../../config/db/thongke');

class ThongKeController {
    //[GET] /THONGKE
    async index(req, res) {
        const data = await GET.THONGKE_DONMUA(req.body);
        res.json(data);
    }

    async vatpham(req, res) {
        const data = await GET.THONGKE_VATPHAM(req.body);
        res.json(data);
    }
}

module.exports = new ThongKeController();
