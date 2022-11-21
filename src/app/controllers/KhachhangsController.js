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

    async account(req, res) {
        const data = await GET.GET_ACCOUNT(req.body.ID_KHACHHANG);
        res.json(data);
    }

    async pass(req, res) {
        const data = await GET.GET_PASS(req.body.ID_KHACHHANG);
        if (data[0].MATKHAU == req.body.PASS) return res.send(true);
        else return res.send(false);
    }

    async changePass(req, res) {
        try {
            await GET.CHANGE_PASS(req.body);
            return res.status(200);
        } catch {
            return res.status(500);
        }
    }
}

module.exports = new KhachhangsController();
