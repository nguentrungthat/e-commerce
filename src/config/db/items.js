const db = require('./index');

//GET ITEMS
async function GET_ITEMS() {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                'select ID_VATPHAM, TEN_VATPHAM, GIABAN, SOLUONG_TONKHO, SOLUONG_DABAN, TEN_STORE, MOTA_VATPHAM, LOAI from VATPHAM a join STORE b on a.CUAHANG = b.ID_STORE',
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

//GET BY ID
async function GET_BYID(id) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `select ID_VATPHAM, TEN_VATPHAM, GIABAN, SOLUONG_TONKHO, SOLUONG_DABAN, TEN_STORE, MOTA_VATPHAM, LOAI from VATPHAM a join STORE b on a.CUAHANG = b.ID_STORE WHERE ID_VATPHAM = '${id}'`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

//GET IMAGES
async function GET_IMAGES(id) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`SELECT * FROM HINHANH_VATPHAM WHERE VATPHAM = '${id}'`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { GET_ITEMS, GET_IMAGES, GET_BYID };
