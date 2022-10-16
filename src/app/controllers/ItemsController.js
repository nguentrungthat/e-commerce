const GET = require('../../config/db/items');

class ItemsController {
    //[GET] /items
    async index(req, res) {
        const data = await GET.GET_ITEMS();
        return res.json(data);
    }

    //[POST] /id
    async id(req, res) {
        const ID = req.body.ID_VATPHAM;
        const data = await GET.GET_BYID(ID);
        return res.json(data);
    }

    //[POST] /images
    async images(req, res) {
        const ID = req.body.ID_VATPHAM;
        const data = await GET.GET_IMAGES(ID);
        if (data.length > 0) {
            return res.send(data);
        } else {
            return res.send([{ TEN_HINHANH: 'logo2.png' }]);
        }
    }
}

module.exports = new ItemsController();
