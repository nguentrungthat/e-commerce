const GET = require('../../config/db/thongke');
const STORE = require('../../config/db/stores');

class ThongKeController {
    //[GET] /THONGKE
    async index(req, res) {
        let body = req.body;
        if (body.ID_KHACHHANG) {
            body.STORE = (await STORE.GET_STORE_BTKH(req.body.ID_KHACHHANG))[0].ID_STORE;
        }
        const data = await GET.THONGKE_DONMUA(body);
        res.json(data);
    }

    async vatpham(req, res) {
        let body = req.body;
        if (body.ID_KHACHHANG) {
            body.STORE = (await STORE.GET_STORE_BTKH(req.body.ID_KHACHHANG))[0].ID_STORE;
        }
        const data = await GET.THONGKE_VATPHAM(body);
        res.json(data);
    }
}

module.exports = new ThongKeController();
