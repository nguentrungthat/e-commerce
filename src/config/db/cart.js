const db = require('./index');

async function GET_CART(id) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `SELECT a.ID_VATPHAM, GIABAN, SOLUONG, TEN_VATPHAM FROM CART a JOIN VATPHAM b on a.ID_VATPHAM = b.ID_VATPHAM WHERE ID_KHACHHANG = ${id}`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function GET_COUNT_CART(id) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(`SELECT COUNT(*) AS QUANTITY FROM CART WHERE ID_KHACHHANG = ${id}`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { GET_CART, GET_COUNT_CART };
