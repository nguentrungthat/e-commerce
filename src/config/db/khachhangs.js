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
            const result = await connection.request().query('SELECT * FROM KHACHHANG ORDER BY NGAYTAO DESC');
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

async function CREATE(body) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `INSERT INTO KHACHHANG VALUES(N'${body.TEN_KHACHHANG}', '${body.SDT}', N'${body.DIACHI}', '${body.EMAIL}', ${body.GIOITINH},'${body.NGAYTAO}', '${body.NGAYSINH}')`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function UPDATE(string) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(string);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function DELETE(id) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`DELETE KHACHHANG WHERE ID_KHACHHANG = ${id}`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function DELETE_ACCOUNT(id) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`DELETE ACCOUNT WHERE ID_KHACHHANG = ${id}`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function DELETE_CART(id) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`DELETE CART WHERE ID_KHACHHANG = ${id}`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function GET_LAST_KH() {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(`select top 1 ID_KHACHHANG from KHACHHANG order by ID_KHACHHANG desc`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function CREATE_ACCOUNT(body) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(`INSERT INTO ACCOUNT VALUES('${body.TAIKHOAN}', '${body.MATKHAU}', ${body.ID_KHACHHANG})`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = {
    GET_KHACHHANGS,
    GET_ACCOUNT,
    GET_PASS,
    CHANGE_PASS,
    CREATE,
    UPDATE,
    DELETE,
    GET_LAST_KH,
    CREATE_ACCOUNT,
    DELETE_ACCOUNT,
    DELETE_CART,
};
