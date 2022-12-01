const db = require('./index');

//[GET] /thongke
async function THONGKE() {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`SELECT * FROM DONMUA`);
        return result.recordsets[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { THONGKE };
