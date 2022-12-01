const GET = require('../../config/db/thongke');

class ThongKeController {
    //[GET] /THONGKE
    async index(req, res) {
        const data = await GET.THONGKE();
        res.json(data);
    }
}

module.exports = new ThongKeController();
