const GET = require('../../config/db/donmuas');

class DonMuasController {
    //[GET] /donmuas
    async index(req, res) {
        const data = await GET.GET_DONMUAS();
        res.json(data);
    }

    async id(req, res) {
        const data = await GET.GET_DONMUAS(req.body.ID_KHACHHANG);
        res.json(data);
    }

    async add(req, res) {
        let data = req.body;
        // console.log(data);
        await GET.ADD_DONMUA(req.body);
        const id_DONMUA = (await GET.GET_LAST_DONMUA())[0].ID_DONMUA;
        for (let i = 0; i < data.VATPHAM.length; i++) {
            await GET.ADD_DONMUACT({
                DONMUA: id_DONMUA,
                ID_VATPHAM: data.VATPHAM[i].ID_VATPHAM,
                SOLUONG: data.VATPHAM[i].SOLUONG,
                DONGIA: data.VATPHAM[i].GIABAN,
                GHICHU: data.VATPHAM[i].GHICHU,
            });
        }
        res.json(data);
    }
}

module.exports = new DonMuasController();
