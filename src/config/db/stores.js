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

async function GET_STORE_BTKH(id) {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`SELECT * FROM STORE WHERE OWNER = ${id}`);
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
                `INSERT INTO STORE VALUES(N'${body.TEN_STORE}', '${body.SDT}', N'${body.ADDRESS}', N'${body.WARD}', N'${body.DISTRICT}', N'${body.PROVINCE}', 0, ${body.ID_KHACHHANG})`,
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
        const result = await connection.request().query(`DELETE STORE WHERE ID_STORE = ${id}`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { GET_STORES, GET_STORE_BYTEN, UPDATE, CREATE, DELETE, GET_STORE_BTKH };
