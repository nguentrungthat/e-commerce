const GET = require('../../config/db/donmuas');

class DonMuasController {
    //[GET] /donmuas
    async index(req, res) {
        const data = await GET.GET_DONMUAS();
        res.json(data);
    }

    async id(req, res) {
        const data = await GET.GET_DONMUAS(req.body.ID_DONMUA_CT);
        res.json(data);
    }

    async top(req, res) {
        const data = await GET.GET_TOP();
        res.json(data);
    }
}

module.exports = new DonMuasController();
