const db = require('./index');

//GET DONMUAS
async function GET_DONMUAS(id) {
    try {
        if (id) {
            const connection = await db.connect();
            const result = await connection.request()
                .query(`select ID_DONMUACT, DONMUA, TEN_KHACHHANG, b.KHACHHANG, VATPHAM, TEN_VATPHAM, TEN_STORE, SOLUONGVP, DONGIAVP, NGAYTHANG, GHICHU, TONGTIEN, NGAYGIAO, FEE, GIAMGIA, DANHAN, DADANHGIA
            from DONMUA_CT a join DONMUA b on b.ID_DONMUA = a.DONMUA 
            join KHACHHANG c on b.KHACHHANG = c.ID_KHACHHANG 
            join VATPHAM d on a.VATPHAM = d.ID_VATPHAM 
            join STORE e on b.STORE = e.ID_STORE WHERE b.KHACHHANG = ${id} ORDER BY NGAYTHANG DESC`);
            const data = result.recordsets;
            return data[0];
        } else {
            const connection = await db.connect();
            const result = await connection.request()
                .query(`select ID_DONMUACT, DONMUA, TEN_KHACHHANG, VATPHAM, TEN_VATPHAM, TEN_STORE, SOLUONGVP, DONGIAVP, NGAYTHANG, GHICHU, TONGTIEN, NGAYGIAO, FEE, GIAMGIA, DANHAN, DADANHGIA
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

async function GET_LAST_DONMUA() {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`select ID_DONMUA from DONMUA order by ID_DONMUA desc`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function ADD_DONMUA(body) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `INSERT INTO DONMUA VALUES(${body.ID_KHACHHANG}, 1, CURRENT_TIMESTAMP, ${body.TONGTIEN}, '${body.NGAYGIAO}', ${body.FEE}, N'${body.DCNHAN}', '${body.ORDER_CODE}', 0, 0, ${body.GIAMGIA})`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function ADD_DONMUACT(body) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `INSERT INTO DONMUA_CT VALUES(${body.DONMUA}, ${body.ID_VATPHAM}, ${body.SOLUONG}, ${body.DONGIA}, N'${body.GHICHU}')`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function GET_VPBYID(id) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(`select ID_VATPHAM, SOLUONG_TONKHO, SOLUONG_DABAN from VATPHAM WHERE ID_VATPHAM = ${id}`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function UPDATE_VP(str) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(str);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function RATE(body) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `INSERT INTO RATING VALUES (${body.RATING}, ${body.KHACHHANG}, ${body.VATPHAM}, N'${body.NHANXET}')`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { GET_DONMUAS, ADD_DONMUA, ADD_DONMUACT, GET_LAST_DONMUA, GET_VPBYID, UPDATE_VP, RATE };
