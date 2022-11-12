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

    async doanhthu(req, res) {
        var data = [];
        data = data.concat((await GET.DOANHTHU_THANG('2022-01-01', '2022-01-31'))[0].TONGTIEN);
        data = data.concat((await GET.DOANHTHU_THANG('2022-02-01', '2022-02-28'))[0].TONGTIEN);
        data = data.concat((await GET.DOANHTHU_THANG('2022-03-01', '2022-03-31'))[0].TONGTIEN);
        data = data.concat((await GET.DOANHTHU_THANG('2022-04-01', '2022-04-30'))[0].TONGTIEN);
        data = data.concat((await GET.DOANHTHU_THANG('2022-05-01', '2022-05-31'))[0].TONGTIEN);
        data = data.concat((await GET.DOANHTHU_THANG('2022-06-01', '2022-06-30'))[0].TONGTIEN);
        data = data.concat((await GET.DOANHTHU_THANG('2022-07-01', '2022-07-31'))[0].TONGTIEN);
        data = data.concat((await GET.DOANHTHU_THANG('2022-08-01', '2022-08-31'))[0].TONGTIEN);
        data = data.concat((await GET.DOANHTHU_THANG('2022-09-01', '2022-09-30'))[0].TONGTIEN);
        data = data.concat((await GET.DOANHTHU_THANG('2022-10-01', '2022-10-31'))[0].TONGTIEN);
        data = data.concat((await GET.DOANHTHU_THANG('2022-11-01', '2022-11-30'))[0].TONGTIEN);
        data = data.concat((await GET.DOANHTHU_THANG('2022-12-01', '2022-12-31'))[0].TONGTIEN);
        res.json(data);
    }

    async khachhang(req, res) {
        var data = [];
        data = data.concat((await GET.KHACHHANG_THANG('2022-01-01', '2022-01-31'))[0].SOLUONG);
        data = data.concat((await GET.KHACHHANG_THANG('2022-02-01', '2022-02-28'))[0].SOLUONG);
        data = data.concat((await GET.KHACHHANG_THANG('2022-03-01', '2022-03-31'))[0].SOLUONG);
        data = data.concat((await GET.KHACHHANG_THANG('2022-04-01', '2022-04-30'))[0].SOLUONG);
        data = data.concat((await GET.KHACHHANG_THANG('2022-05-01', '2022-05-31'))[0].SOLUONG);
        data = data.concat((await GET.KHACHHANG_THANG('2022-06-01', '2022-06-30'))[0].SOLUONG);
        data = data.concat((await GET.KHACHHANG_THANG('2022-07-01', '2022-07-31'))[0].SOLUONG);
        data = data.concat((await GET.KHACHHANG_THANG('2022-08-01', '2022-08-31'))[0].SOLUONG);
        data = data.concat((await GET.KHACHHANG_THANG('2022-09-01', '2022-09-30'))[0].SOLUONG);
        data = data.concat((await GET.KHACHHANG_THANG('2022-10-01', '2022-10-31'))[0].SOLUONG);
        data = data.concat((await GET.KHACHHANG_THANG('2022-11-01', '2022-11-30'))[0].SOLUONG);
        data = data.concat((await GET.KHACHHANG_THANG('2022-12-01', '2022-12-31'))[0].SOLUONG);
        res.json(data);
    }

    async donmua(req, res) {
        var data = [];
        data = data.concat((await GET.DONMUA_THANG('2022-01-01', '2022-01-31'))[0].SOLUONG);
        data = data.concat((await GET.DONMUA_THANG('2022-02-01', '2022-02-28'))[0].SOLUONG);
        data = data.concat((await GET.DONMUA_THANG('2022-03-01', '2022-03-31'))[0].SOLUONG);
        data = data.concat((await GET.DONMUA_THANG('2022-04-01', '2022-04-30'))[0].SOLUONG);
        data = data.concat((await GET.DONMUA_THANG('2022-05-01', '2022-05-31'))[0].SOLUONG);
        data = data.concat((await GET.DONMUA_THANG('2022-06-01', '2022-06-30'))[0].SOLUONG);
        data = data.concat((await GET.DONMUA_THANG('2022-07-01', '2022-07-31'))[0].SOLUONG);
        data = data.concat((await GET.DONMUA_THANG('2022-08-01', '2022-08-31'))[0].SOLUONG);
        data = data.concat((await GET.DONMUA_THANG('2022-09-01', '2022-09-30'))[0].SOLUONG);
        data = data.concat((await GET.DONMUA_THANG('2022-10-01', '2022-10-31'))[0].SOLUONG);
        data = data.concat((await GET.DONMUA_THANG('2022-11-01', '2022-11-30'))[0].SOLUONG);
        data = data.concat((await GET.DONMUA_THANG('2022-12-01', '2022-12-31'))[0].SOLUONG);
        res.json(data);
    }
}

module.exports = new DashboardsController();
