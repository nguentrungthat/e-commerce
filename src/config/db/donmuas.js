const db = require('./index');

//GET DONMUAS
async function GET_DONMUAS(id) {
    try {
        if (id) {
            const connection = await db.connect();
            const result = await connection.request()
                .query(`select ID_DONMUACT, DONMUA, TEN_KHACHHANG, b.KHACHHANG, VATPHAM, TEN_VATPHAM, TEN_STORE, SOLUONGVP, DONGIAVP, NGAYTHANG, GHICHU, TONGTIEN
            from DONMUA_CT a join DONMUA b on b.ID_DONMUA = a.DONMUA 
            join KHACHHANG c on b.KHACHHANG = c.ID_KHACHHANG 
            join VATPHAM d on a.VATPHAM = d.ID_VATPHAM 
            join STORE e on b.STORE = e.ID_STORE WHERE b.KHACHHANG = ${id} ORDER BY NGAYTHANG DESC`);
            const data = result.recordsets;
            return data[0];
        } else {
            const connection = await db.connect();
            const result = await connection.request()
                .query(`select ID_DONMUACT, DONMUA, TEN_KHACHHANG, VATPHAM, TEN_VATPHAM, TEN_STORE, SOLUONGVP, DONGIAVP, NGAYTHANG, GHICHU, TONGTIEN
            from DONMUA_CT a join DONMUA b on b.ID_DONMUA = a.DONMUA 
            join KHACHHANG c on b.KHACHHANG = c.ID_KHACHHANG 
            join VATPHAM d on a.VATPHAM = d.ID_VATPHAM 
            join STORE e on b.STORE = e.ID_STORE ORDER BY NGAYTHANG DESC`);
            const data = result.recordsets;
            return data[0];
        }
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function GET_TOP() {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `SELECT TOP 5 TEN_KHACHHANG, TONGTIEN, NGAYTHANG FROM DONMUA a JOIN KHACHHANG b ON a.KHACHHANG = B.ID_KHACHHANG ORDER BY TONGTIEN DESC`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { GET_DONMUAS, GET_TOP };
