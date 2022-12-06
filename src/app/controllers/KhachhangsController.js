const KH = require('../../config/db/khachhangs');

class KhachhangsController {
    //[GET] /khachhangs
    async index(req, res) {
        const data = await KH.GET_KHACHHANGS();
        res.json(data);
    }

    async id(req, res) {
        const data = await KH.GET_KHACHHANGS(req.body.ID_KHACHHANG);
        res.json(data);
    }

    async account(req, res) {
        const data = await KH.GET_ACCOUNT(req.body.ID_KHACHHANG);
        res.json(data);
    }

    async pass(req, res) {
        const data = await KH.GET_PASS(req.body.ID_KHACHHANG);
        if (data[0].MATKHAU == req.body.PASS) return res.send(true);
        else return res.send(false);
    }

    async changePass(req, res) {
        try {
            await KH.CHANGE_PASS(req.body);
            return res.status(200);
        } catch {
            return res.status(400);
        }
    }

    async create(req, res) {
        try {
            let body = req.body;
            for (const value of body) {
                await KH.CREATE(value);
            }
            return res.status(200).send();
        } catch {
            return res.status(400).send();
        }
    }

    async update(req, res) {
        try {
            let body = req.body;
            let string = '';
            for (const value of body) {
                switch (value.field) {
                    case 'col1':
                        string = `UPDATE KHACHHANG SET TEN_KHACHHANG = N'${value.value}' WHERE ID_KHACHHANG = ${value.id}`;
                        break;
                    case 'col2':
                        string = `UPDATE KHACHHANG SET NGAYSINH = '${value.value}' WHERE ID_KHACHHANG = ${value.id}`;
                        break;
                    case 'col3':
                        string = `UPDATE KHACHHANG SET GIOITINH = ${value.value} WHERE ID_KHACHHANG = ${value.id}`;
                        break;
                    case 'col4':
                        string = `UPDATE KHACHHANG SET SDT = '${value.value}' WHERE ID_KHACHHANG = ${value.id}`;
                        break;
                    case 'col5':
                        string = `UPDATE KHACHHANG SET DIACHI = N'${value.value}' WHERE ID_KHACHHANG = ${value.id}`;
                        break;
                    case 'col6':
                        string = `UPDATE KHACHHANG SET EMAIL = '${value.value}' WHERE ID_KHACHHANG = ${value.id}`;
                        break;
                }
                await KH.UPDATE(string);
            }
            return res.status(200).send();
        } catch {
            return res.status(400).send();
        }
    }

    async delete(req, res) {
        try {
            let body = req.body;
            for (const value of body) {
                await KH.DELETE(value);
            }
            return res.status(200).send();
        } catch {
            return res.status(400).send();
        }
    }
}

module.exports = new KhachhangsController();
