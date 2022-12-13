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

async function COUNT_DONMUA(from, to) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`SELECT COUNT(*) AS DONMUA FROM DONMUA`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function DOANHTHU_THANG(from, to, id) {
    try {
        const connection = await db.connect();
        if (id) {
            const result = await connection
                .request()
                .query(
                    `SELECT SUM(TONGTIEN) AS TONGTIEN FROM DONMUA WHERE NGAYTHANG BETWEEN '${from}' AND '${to}' AND STORE = ${id}`,
                );
            const data = result.recordsets;
            console.log(data[0]);
            return data[0];
        } else {
            const result = await connection
                .request()
                .query(`SELECT SUM(TONGTIEN) AS TONGTIEN FROM DONMUA WHERE NGAYTHANG BETWEEN '${from}' AND '${to}'`);
            const data = result.recordsets;
            return data[0];
        }
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

async function DONMUA_THANG(from, to, id) {
    try {
        const connection = await db.connect();
        if (id) {
            const result = await connection
                .request()
                .query(
                    `SELECT COUNT(ID_DONMUA) AS SOLUONG FROM DONMUA WHERE NGAYTHANG BETWEEN '${from}' AND '${to}' AND STORE = ${id}`,
                );
            const data = result.recordsets;
            return data[0];
        } else {
            const result = await connection
                .request()
                .query(`SELECT COUNT(ID_DONMUA) AS SOLUONG FROM DONMUA WHERE NGAYTHANG BETWEEN '${from}' AND '${to}'`);
            const data = result.recordsets;
            return data[0];
        }
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function TOP_DONMUA(from, to, id) {
    try {
        const connection = await db.connect();
        if (id) {
            const result = await connection
                .request()
                .query(
                    `SELECT TOP 5 TEN_KHACHHANG, TONGTIEN, NGAYTHANG FROM DONMUA a JOIN KHACHHANG b ON a.KHACHHANG = B.ID_KHACHHANG WHERE NGAYTHANG BETWEEN '${from}' AND '${to}' AND STORE = ${id} ORDER BY TONGTIEN DESC`,
                );
            const data = result.recordsets;
            return data[0];
        } else {
            const result = await connection
                .request()
                .query(
                    `SELECT TOP 5 TEN_KHACHHANG, TONGTIEN, NGAYTHANG FROM DONMUA a JOIN KHACHHANG b ON a.KHACHHANG = B.ID_KHACHHANG WHERE NGAYTHANG BETWEEN '${from}' AND '${to}' ORDER BY TONGTIEN DESC`,
                );
            const data = result.recordsets;
            return data[0];
        }
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function TOP_SANPHAM(from, to, id) {
    try {
        const connection = await db.connect();
        if (id) {
            const result = await connection
                .request()
                .query(
                    `SELECT TOP 5 TEN_VATPHAM, TEN_STORE, SUM(SOLUONGVP) as SOLUONG FROM DONMUA_CT a JOIN DONMUA d on a.DONMUA=d.ID_DONMUA JOIN VATPHAM b on a.VATPHAM = b.ID_VATPHAM JOIN STORE c on b.CUAHANG = c.ID_STORE WHERE d.NGAYTHANG BETWEEN '${from}' AND '${to}' AND STORE = ${id} GROUP BY TEN_VATPHAM, TEN_STORE ORDER BY SOLUONG DESC`,
                );
            const data = result.recordsets;
            return data[0];
        } else {
            const result = await connection
                .request()
                .query(
                    `SELECT TOP 5 TEN_VATPHAM, TEN_STORE, SUM(SOLUONGVP) as SOLUONG FROM DONMUA_CT a JOIN DONMUA d on a.DONMUA=d.ID_DONMUA JOIN VATPHAM b on a.VATPHAM = b.ID_VATPHAM JOIN STORE c on b.CUAHANG = c.ID_STORE WHERE d.NGAYTHANG BETWEEN '${from}' AND '${to}' GROUP BY TEN_VATPHAM, TEN_STORE ORDER BY SOLUONG DESC`,
                );
            const data = result.recordsets;
            return data[0];
        }
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
    TOP_DONMUA,
    TOP_SANPHAM,
};
