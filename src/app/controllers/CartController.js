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

    async add(req, res) {
        try {
            await GET.ADD_CART(req.body);
            return res.status(200);
        } catch {
            return res.status(500);
        }
    }

    async delete(req, res) {
        try {
            await GET.DELETE_CART(req.body.ID_CART);
            return res.status(200);
        } catch {
            return res.status(500);
        }
    }

    async update(req, res) {
        try {
            await GET.UPDATE_CART(req.body);
            return res.status(200);
        } catch {
            return res.status(500);
        }
    }
}

module.exports = new CartController();
