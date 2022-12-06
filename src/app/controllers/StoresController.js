const STORE = require('../../config/db/stores');

class StoresController {
    //[GET] /stores
    async index(req, res) {
        const data = await STORE.GET_STORES();
        res.json(data);
    }

    async create(req, res) {
        try {
            await STORE.CREATE(req.body);
            return res.status(200);
        } catch {
            return res.status(400);
        }
    }

    async update(req, res) {
        try {
            await STORE.UPDATE(req.body);
            return res.status(200);
        } catch {
            return res.status(400);
        }
    }

    async delete(req, res) {
        try {
            await STORE.DELETE(req.body);
            return res.status(200);
        } catch {
            return res.status(400);
        }
    }
}

module.exports = new StoresController();
