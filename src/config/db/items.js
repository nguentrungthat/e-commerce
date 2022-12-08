const db = require('./index');

//GET ITEMS
async function GET_ITEMS() {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                'select ID_VATPHAM, TEN_VATPHAM, GIABAN, SOLUONG_TONKHO, SOLUONG_DABAN, TEN_STORE, MOTA_VATPHAM, LOAI, SIZE, COLOR, XUATXU from VATPHAM a join STORE b on a.CUAHANG = b.ID_STORE',
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
                `select ID_VATPHAM, TEN_VATPHAM, GIABAN, SOLUONG_TONKHO, SOLUONG_DABAN, TEN_STORE, MOTA_VATPHAM, LOAI, SIZE, COLOR, XUATXU from VATPHAM a join STORE b on a.CUAHANG = b.ID_STORE WHERE ID_VATPHAM = '${id}'`,
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

//GET LOAI
async function GET_LOAI_AO() {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `select LOAI_VATPHAM, TEN_LOAI_AO as TEN_LOAI from DANHMUC_LOAI a join LOAI_AO b on a.LOAI_VATPHAM = b.ID_LOAI_AO`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function GET_LOAI_QUAN() {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `select LOAI_VATPHAM, TEN_LOAI_QUAN as TEN_LOAI from DANHMUC_LOAI a join LOAI_QUAN b on a.LOAI_VATPHAM = b.ID_LOAI_QUAN`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function GET_LOAI_GIAY() {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `select LOAI_VATPHAM, TEN_LOAI_GIAY as TEN_LOAI from DANHMUC_LOAI a join LOAI_GIAY b on a.LOAI_VATPHAM = b.ID_LOAI_GIAY`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function GET_LOAI_PHUKIEN() {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `select LOAI_VATPHAM, TEN_LOAI_PHUKIEN as TEN_LOAI from DANHMUC_LOAI a join LOAI_PHUKIEN b on a.LOAI_VATPHAM = b.ID_LOAI_PHUKIEN`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function CREATE(body) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `INSERT INTO VATPHAM VALUES(N'${body.TEN_VATPHAM}',${body.GIABAN},${body.SOLUONG_TONKHO},0,${body.CUAHANG},N'${body.MOTA_VATPHAM}','${body.LOAI}', N'${body.SIZE}', N'${body.COLOR}', N'${body.XUATXU}')`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function DELETE(id) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`DELETE VATPHAM WHERE ID_VATPHAM = ${id}`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function UPDATE(str) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(str);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function LOAI(str) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(`SELECT ID_VATPHAM, TEN_VATPHAM, GIABAN, LOAI from VATPHAM WHERE LOAI like '${str}%'`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function SEARCH(str) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `select ID_VATPHAM, TEN_VATPHAM, GIABAN, SOLUONG_TONKHO, SOLUONG_DABAN, TEN_STORE, MOTA_VATPHAM, LOAI, SIZE, COLOR, XUATXU from VATPHAM a join STORE b on a.CUAHANG = b.ID_STORE WHERE TEN_VATPHAM like '%${str}%'`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function GET_LAST_VATPHAM() {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(`select top 1 ID_VATPHAM from VATPHAM order by ID_VATPHAM desc`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function ADD_IMG(hinhanh, id) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`INSERT INTO HINHANH_VATPHAM VALUES (N'${hinhanh}', ${id})`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = {
    GET_ITEMS,
    GET_IMAGES,
    GET_BYID,
    GET_LOAI_AO,
    GET_LOAI_QUAN,
    GET_LOAI_GIAY,
    GET_LOAI_PHUKIEN,
    CREATE,
    DELETE,
    UPDATE,
    LOAI,
    SEARCH,
    ADD_IMG,
    GET_LAST_VATPHAM,
};
