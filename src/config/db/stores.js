const db = require('./index');

//GET ITEMS
async function GET_STORES() {
    try {
        const connection = await db.connect();
        const result = await connection.request().query('SELECT * FROM STORE');
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function GET_STORE_BYTEN(name) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`SELECT * FROM STORE WHERE TEN_STORE = N'${name}'`);
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
                `INSERT INTO STORE VALUES(N'${body.TEN_KHACHHANG}', '${body.SDT}', N'${body.ADDRESS}', N'${body.WARD}', N'${body.DISTRICT}', N'${body.PROVINCE}')`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function UPDATE(body) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `UPDATE STORE SET TEN_STORE = N'${body.TEN_STORE}', SDT = '${body.SDT}', ADDRESS = N'${body.ADDRESS}', WARD = N'${body.WARD}', DISTRICT = N'${body.DISTRICT}', PROVINCE = N'${body.PROVINCE}' WHERE ID_STORE = ${body.ID_STORE}`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function DELETE(body) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`DELETE STORE WHERE ID_STORE = ${body.ID_STORE}`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { GET_STORES, GET_STORE_BYTEN, UPDATE, CREATE, DELETE };
