const db = require('./index');

//GET ITEMS
async function COUNT_VATPHAM() {
    try {
        const connection = await db.connect();
        //const str = query.GetLevels();
        const result = await connection.request().query('SELECT COUNT(*) AS VATPHAM FROM VATPHAM');
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function COUNT_KHACHHANG() {
    try {
        const connection = await db.connect();
        //const str = query.GetLevels();
        const result = await connection.request().query('SELECT COUNT(*) AS KHACHHANG FROM KHACHHANG');
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function COUNT_STORE() {
    try {
        const connection = await db.connect();
        //const str = query.GetLevels();
        const result = await connection.request().query('SELECT COUNT(*) AS CUAHANG FROM STORE');
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function COUNT_DONMUA() {
    try {
        const connection = await db.connect();
        //const str = query.GetLevels();
        const result = await connection.request().query('SELECT COUNT(*) AS DONMUA FROM DONMUA');
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { COUNT_VATPHAM, COUNT_KHACHHANG, COUNT_STORE, COUNT_DONMUA };
