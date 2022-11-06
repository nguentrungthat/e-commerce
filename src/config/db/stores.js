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

module.exports = { GET_STORES, GET_STORE_BYTEN };
