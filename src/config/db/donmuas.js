const db = require('./index');

//GET DONMUAS
async function GET_DONMUAS(id) {
    try {
        if (id) {
            const connection = await db.connect();
            //const str = query.GetLevels();
            const result = await connection.request()
                .query(`select ID_DONMUACT, DONMUA, TEN_KHACHHANG, TEN_VATPHAM, TEN_STORE, SOLUONGVP, DONGIAVP, NGAYTHANG
            from DONMUA_CT a join DONMUA b on b.ID_DONMUA = a.DONMUA 
            join KHACHHANG c on b.KHACHHANG = c.ID_KHACHHANG 
            join VATPHAM d on a.VATPHAM = d.ID_VATPHAM 
            join STORE e on b.STORE = e.ID_STORE WHERE ID_DONMUACT = '${id}'`);
            const data = result.recordsets;
            return data[0];
        } else {
            const connection = await db.connect();
            //const str = query.GetLevels();
            const result = await connection.request()
                .query(`select ID_DONMUACT, DONMUA, TEN_KHACHHANG, TEN_VATPHAM, TEN_STORE, SOLUONGVP, DONGIAVP, NGAYTHANG
            from DONMUA_CT a join DONMUA b on b.ID_DONMUA = a.DONMUA 
            join KHACHHANG c on b.KHACHHANG = c.ID_KHACHHANG 
            join VATPHAM d on a.VATPHAM = d.ID_VATPHAM 
            join STORE e on b.STORE = e.ID_STORE`);
            const data = result.recordsets;
            return data[0];
        }
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { GET_DONMUAS };
