const MGG = require('../../config/db/magiamgia');

class MaGiamGiaController {
    //[GET] /MAGIAMGIA
    async index(req, res) {
        const data = await MGG.MAGIAMGIA();
        res.json(data);
    }

    async create(req, res) {
        try {
            let body = req.body;
            for (const value of body) {
                await MGG.CREATE(value);
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
                await MGG.DELETE(value);
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
                        string = `UPDATE MAGIAMGIA SET MAGIAMGIA = '${value.value}' WHERE ID_MGG = ${value.id}`;
                        break;
                    case 'col2':
                        string = `UPDATE MAGIAMGIA SET TG_BATDAU = '${value.value}' WHERE ID_MGG = ${value.id}`;
                        break;
                    case 'col3':
                        string = `UPDATE MAGIAMGIA SET TG_KETTHUC = '${value.value}' WHERE ID_MGG = ${value.id}`;
                        break;
                    case 'col4':
                        string = `UPDATE MAGIAMGIA SET GIATRI_GIAM = ${value.value} WHERE ID_MGG = ${value.id}`;
                        break;
                    case 'col5':
                        string = `UPDATE MAGIAMGIA SET ACTIVE = ${value.value} WHERE ID_MGG = ${value.id}`;
                        break;
                }
                await MGG.UPDATE(string);
            }
            return res.status(200).send();
        } catch {
            return res.status(400).send();
        }
    }
}

module.exports = new MaGiamGiaController();
