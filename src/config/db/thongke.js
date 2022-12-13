const db = require('./index');

//[POST] /thongke
async function THONGKE_DONMUA(body) {
    try {
        const connection = await db.connect();
        if (body.STORE) {
            if (body.LOAI) {
                const result = await connection.request()
                    .query(`select ID_DONMUACT, DONMUA, TEN_KHACHHANG, VATPHAM, TEN_VATPHAM, TEN_STORE, SOLUONGVP, DONGIAVP, NGAYTHANG, GHICHU, TONGTIEN, NGAYGIAO, FEE
            from DONMUA_CT a join DONMUA b on b.ID_DONMUA = a.DONMUA 
            join KHACHHANG c on b.KHACHHANG = c.ID_KHACHHANG 
            join VATPHAM d on a.VATPHAM = d.ID_VATPHAM 
            join STORE e on b.STORE = e.ID_STORE
            WHERE b.NGAYTHANG BETWEEN '${body.FROM}' AND '${body.TO}' AND d.LOAI like '%${body.LOAI}%' AND b.STORE = ${body.STORE}
            ORDER BY NGAYTHANG DESC`);
                return result.recordsets[0];
            } else {
                const result = await connection.request()
                    .query(`select ID_DONMUACT, DONMUA, TEN_KHACHHANG, VATPHAM, TEN_VATPHAM, TEN_STORE, SOLUONGVP, DONGIAVP, NGAYTHANG, GHICHU, TONGTIEN, NGAYGIAO, FEE
            from DONMUA_CT a join DONMUA b on b.ID_DONMUA = a.DONMUA 
            join KHACHHANG c on b.KHACHHANG = c.ID_KHACHHANG 
            join VATPHAM d on a.VATPHAM = d.ID_VATPHAM 
            join STORE e on b.STORE = e.ID_STORE
            WHERE b.NGAYTHANG BETWEEN '${body.FROM}' AND '${body.TO}' AND b.STORE = ${body.STORE}
            ORDER BY NGAYTHANG DESC`);
                return result.recordsets[0];
            }
        } else {
            if (body.LOAI) {
                const result = await connection.request()
                    .query(`select ID_DONMUACT, DONMUA, TEN_KHACHHANG, VATPHAM, TEN_VATPHAM, TEN_STORE, SOLUONGVP, DONGIAVP, NGAYTHANG, GHICHU, TONGTIEN, NGAYGIAO, FEE
            from DONMUA_CT a join DONMUA b on b.ID_DONMUA = a.DONMUA 
            join KHACHHANG c on b.KHACHHANG = c.ID_KHACHHANG 
            join VATPHAM d on a.VATPHAM = d.ID_VATPHAM 
            join STORE e on b.STORE = e.ID_STORE
            WHERE b.NGAYTHANG BETWEEN '${body.FROM}' AND '${body.TO}' AND d.LOAI like '%${body.LOAI}%'
            ORDER BY NGAYTHANG DESC`);
                return result.recordsets[0];
            } else {
                const result = await connection.request()
                    .query(`select ID_DONMUACT, DONMUA, TEN_KHACHHANG, VATPHAM, TEN_VATPHAM, TEN_STORE, SOLUONGVP, DONGIAVP, NGAYTHANG, GHICHU, TONGTIEN, NGAYGIAO, FEE
            from DONMUA_CT a join DONMUA b on b.ID_DONMUA = a.DONMUA 
            join KHACHHANG c on b.KHACHHANG = c.ID_KHACHHANG 
            join VATPHAM d on a.VATPHAM = d.ID_VATPHAM 
            join STORE e on b.STORE = e.ID_STORE
            WHERE b.NGAYTHANG BETWEEN '${body.FROM}' AND '${body.TO}'
            ORDER BY NGAYTHANG DESC`);
                return result.recordsets[0];
            }
        }
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function THONGKE_VATPHAM(body) {
    try {
        const connection = await db.connect();
        if (body.STORE) {
            if (body.LOAI) {
                const result = await connection.request()
                    .query(`SELECT TEN_VATPHAM, c.TEN_STORE, SUM(SOLUONGVP) as SOLUONG
                FROM DONMUA_CT a JOIN DONMUA d on a.DONMUA=d.ID_DONMUA
                JOIN VATPHAM b on a.VATPHAM = b.ID_VATPHAM
                JOIN STORE c on d.STORE = c.ID_STORE
                WHERE d.NGAYTHANG BETWEEN '${body.FROM}' AND '${body.TO}' AND b.LOAI like '%${body.LOAI}%' AND d.STORE = ${body.STORE}
                GROUP BY TEN_VATPHAM, c.TEN_STORE
                ORDER BY SOLUONG DESC`);
                return result.recordsets[0];
            } else {
                const result = await connection.request()
                    .query(`SELECT TEN_VATPHAM, c.TEN_STORE, SUM(SOLUONGVP) as SOLUONG
                FROM DONMUA_CT a JOIN DONMUA d on a.DONMUA=d.ID_DONMUA
                JOIN VATPHAM b on a.VATPHAM = b.ID_VATPHAM
                JOIN STORE c on d.STORE = c.ID_STORE
                WHERE d.NGAYTHANG BETWEEN '${body.FROM}' AND '${body.TO}' AND d.STORE = ${body.STORE}
                GROUP BY TEN_VATPHAM, c.TEN_STORE
                ORDER BY SOLUONG DESC`);
                return result.recordsets[0];
            }
        } else {
            if (body.LOAI) {
                const result = await connection.request()
                    .query(`SELECT TEN_VATPHAM, TEN_STORE, SUM(SOLUONGVP) as SOLUONG
                FROM DONMUA_CT a JOIN DONMUA d on a.DONMUA=d.ID_DONMUA
                JOIN VATPHAM b on a.VATPHAM = b.ID_VATPHAM
                JOIN STORE c on b.CUAHANG = c.ID_STORE
                WHERE d.NGAYTHANG BETWEEN '${body.FROM}' AND '${body.TO}' AND b.LOAI like '%${body.LOAI}%'
                GROUP BY TEN_VATPHAM, TEN_STORE
                ORDER BY SOLUONG DESC`);
                return result.recordsets[0];
            } else {
                const result = await connection.request()
                    .query(`SELECT TEN_VATPHAM, TEN_STORE, SUM(SOLUONGVP) as SOLUONG
                FROM DONMUA_CT a JOIN DONMUA d on a.DONMUA=d.ID_DONMUA
                JOIN VATPHAM b on a.VATPHAM = b.ID_VATPHAM
                JOIN STORE c on b.CUAHANG = c.ID_STORE
                WHERE d.NGAYTHANG BETWEEN '${body.FROM}' AND '${body.TO}'
                GROUP BY TEN_VATPHAM, TEN_STORE
                ORDER BY SOLUONG DESC`);
                return result.recordsets[0];
            }
        }
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { THONGKE_DONMUA, THONGKE_VATPHAM };
