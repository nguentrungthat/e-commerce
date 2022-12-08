const DONMUA = require('../../config/db/donmuas');

class DonMuasController {
    //[GET] /donmuas
    async index(req, res) {
        const data = await DONMUA.GET_DONMUAS();
        res.json(data);
    }

    async id(req, res) {
        const data = await DONMUA.GET_DONMUAS(req.body.ID_KHACHHANG);
        res.json(data);
    }

    async add(req, res) {
        try {
            let data = req.body;
            // console.log(data);
            await DONMUA.ADD_DONMUA(req.body);
            const id_DONMUA = (await DONMUA.GET_LAST_DONMUA())[0].ID_DONMUA;
            for (let i = 0; i < data.VATPHAM.length; i++) {
                await DONMUA.ADD_DONMUACT({
                    DONMUA: id_DONMUA,
                    ID_VATPHAM: data.VATPHAM[i].ID_VATPHAM,
                    SOLUONG: data.VATPHAM[i].SOLUONG,
                    DONGIA: data.VATPHAM[i].GIABAN,
                    GHICHU: data.VATPHAM[i].GHICHU,
                });
                const item = await DONMUA.GET_VPBYID(data.VATPHAM[i].ID_VATPHAM);
                const sl_tonkho = item.SOLUONG_TONKHO - 1;
                const sl_daban = item.SOLUONG_DABAN + 1;
                await DONMUA.UPDATE_VP(
                    `UPDATE VATPHAM SET SOLUONG_TONKHO = ${sl_tonkho}, SOLUONG_DABAN = ${sl_daban} WHERE ID_VATPHAM = ${item.ID_VATPHAM}`,
                );
            }
            res.status(200).send();
        } catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    }

    async rate(req, res) {
        const data = await DONMUA.RATE(req.body);
        res.json(data);
    }
}

module.exports = new DonMuasController();
