const MGG = require('../../config/db/magiamgia');

class MaGiamGiaController {
    //[GET] /MAGIAMGIA
    async index(req, res) {
        const data = await MGG.MAGIAMGIA();
        res.json(data);
    }

    async create(req, res) {
        try {
            await MGG.CREATE(req.body);
            return res.status(200);
        } catch {
            return res.status(400);
        }
    }

    async update(req, res) {
        try {
            await MGG.UPDATE(req.body);
            return res.status(200);
        } catch {
            return res.status(400);
        }
    }

    async delete(req, res) {
        try {
            await MGG.DELETE(req.body);
            return res.status(200);
        } catch {
            return res.status(400);
        }
    }
}

module.exports = new MaGiamGiaController();
