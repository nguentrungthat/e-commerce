const db = require('./index');

//[GET] /thongke
async function THONGKE() {
    try {
        const connection = await db.connect();
        const result = await connection.request()
            .query(`select ID_DONMUACT, DONMUA, TEN_KHACHHANG, VATPHAM, TEN_VATPHAM, TEN_STORE, SOLUONGVP, DONGIAVP, NGAYTHANG, GHICHU, TONGTIEN, NGAYGIAO, FEE
        from DONMUA_CT a join DONMUA b on b.ID_DONMUA = a.DONMUA 
        join KHACHHANG c on b.KHACHHANG = c.ID_KHACHHANG 
        join VATPHAM d on a.VATPHAM = d.ID_VATPHAM 
        join STORE e on b.STORE = e.ID_STORE ORDER BY NGAYTHANG DESC`);
        return result.recordsets[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { THONGKE };
