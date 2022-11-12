const db = require('./index');

async function GET_CART(id) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `SELECT ID_CART, a.ID_VATPHAM, GIABAN, SOLUONG, TEN_VATPHAM FROM CART a JOIN VATPHAM b on a.ID_VATPHAM = b.ID_VATPHAM WHERE ID_KHACHHANG = ${id}`,
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

async function ADD_CART(body) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(`INSERT INTO CART VALUES(${body.ID_VATPHAM}, ${body.SOLUONG}, ${body.ID_KHACHHANG})`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function DELETE_CART(id) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`DELETE CART WHERE ID_CART = ${id}`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function UPDATE_CART(body) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(`UPDATE CART SET SOLUONG = ${body.SOLUONG} WHERE ID_CART = ${body.ID_CART}`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { GET_CART, GET_COUNT_CART, ADD_CART, DELETE_CART, UPDATE_CART };
