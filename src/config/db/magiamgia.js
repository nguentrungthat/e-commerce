const db = require('./index');

//[POST] /magiamgia
async function MAGIAMGIA() {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`SELECT * FROM MAGIAMGIA`);
        return result.recordsets[0];
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
                `INSERT INTO MAGIAMGIA VALUES('${body.MAGIAMGIA}', '${body.TG_BATDAU}', '${body.TG_KETTHUC}', ${body.GIATRI_GIAM}, ${body.ACTIVE})`,
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
                `UPDATE MAGIAMGIA SET MAGIAMGIA = '${body.MAGIAMGIA}', TG_BATDAU = '${body.TG_BATDAU}', TG_KETTHUC = '${body.TG_KETTHUC}', GIATRI_GIAM = ${body.GIATRI_GIAM}, ACTIVE = ${body.ACTIVE} WHERE ID_MGG = ${body.ID_MGG}`,
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
        const result = await connection.request().query(`DELETE MAGIAMGIA WHERE ID_MGG = ${body.ID_MGG}`);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { MAGIAMGIA, CREATE, UPDATE, DELETE };
