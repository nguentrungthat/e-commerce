const GET = require('../../config/db/dashboards');

class DashboardsController {
    //[GET]
    async index(req, res) {
        var data = [];
        data = data.concat(await GET.COUNT_VATPHAM());
        data = data.concat(await GET.COUNT_KHACHHANG());
        data = data.concat(await GET.COUNT_STORE());
        data = data.concat(await GET.COUNT_DONMUA());
        res.json(data);
    }
}

module.exports = new DashboardsController();
