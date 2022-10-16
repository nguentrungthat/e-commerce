const db = require('./index');

//GET ITEMS
async function GET_KHACHHANGS(id) {
    try {
        if (id) {
            const connection = await db.connect();
            //const str = query.GetLevels();
            const result = await connection.request().query(`SELECT * FROM KHACHHANG WHERE ID_KHACHHANG = '${id}'`);
            const data = result.recordsets;
            return data[0];
        } else {
            const connection = await db.connect();
            //const str = query.GetLevels();
            const result = await connection.request().query('SELECT * FROM KHACHHANG');
            const data = result.recordsets;
            return data[0];
        }
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { GET_KHACHHANGS };
