const db = require('./index');

//GET ITEMS
async function COUNT_VATPHAM() {
    try {
        const connection = await db.connect();
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
        const result = await connection.request().query('SELECT COUNT(*) AS DONMUA FROM DONMUA');
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function DOANHTHU_THANG(from, to) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(`SELECT SUM(TONGTIEN) AS TONGTIEN FROM DONMUA WHERE NGAYTHANG BETWEEN '${from}' AND '${to}'`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function KHACHHANG_THANG(from, to) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(`SELECT COUNT(ID_KHACHHANG) AS SOLUONG FROM KHACHHANG WHERE NGAYTAO BETWEEN '${from}' AND '${to}'`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function DONMUA_THANG(from, to) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(`SELECT COUNT(ID_DONMUA) AS SOLUONG FROM DONMUA WHERE NGAYTHANG BETWEEN '${from}' AND '${to}'`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = {
    COUNT_VATPHAM,
    COUNT_KHACHHANG,
    COUNT_STORE,
    COUNT_DONMUA,
    DOANHTHU_THANG,
    KHACHHANG_THANG,
    DONMUA_THANG,
};
