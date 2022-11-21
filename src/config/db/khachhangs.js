const db = require('./index');

//GET ITEMS
async function GET_KHACHHANGS(id) {
    try {
        if (id) {
            const connection = await db.connect();
            const result = await connection.request().query(`SELECT * FROM KHACHHANG WHERE ID_KHACHHANG = '${id}'`);
            const data = result.recordsets;
            return data[0];
        } else {
            const connection = await db.connect();
            const result = await connection.request().query('SELECT * FROM KHACHHANG');
            const data = result.recordsets;
            return data[0];
        }
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function GET_ACCOUNT(id) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`SELECT TAIKHOAN FROM ACCOUNT WHERE ID_KHACHHANG = ${id}`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function GET_PASS(id) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`SELECT MATKHAU FROM ACCOUNT WHERE ID_KHACHHANG = ${id}`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function CHANGE_PASS(body) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(`UPDATE ACCOUNT SET MATKHAU = '${body.PASS}' WHERE ID_KHACHHANG = ${body.ID_KHACHHANG}`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { GET_KHACHHANGS, GET_ACCOUNT, GET_PASS, CHANGE_PASS };
