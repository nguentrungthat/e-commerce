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

module.exports = { MAGIAMGIA };
