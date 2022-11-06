const GET = require('../../config/db/cart');

class CartController {
    //[POST] /cart
    async index(req, res) {
        const data = await GET.GET_CART(req.body.ID_KHACHHANG);
        res.json(data);
    }

    async count(req, res) {
        const data = await GET.GET_COUNT_CART(req.body.ID_KHACHHANG);
        res.json(data);
    }
}

module.exports = new CartController();
