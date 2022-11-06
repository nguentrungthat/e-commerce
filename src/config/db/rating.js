const db = require('./index');

//GET
async function GET_RATING(id) {
    try {
        if (id) {
            const connection = await db.connect();
            const result = await connection.request().query(`SELECT * FROM RATING WHERE VATPHAM = '${id}'`);
            const data = result.recordsets;
            return data[0];
        } else {
            const connection = await db.connect();
            const result = await connection.request().query('SELECT * FROM RATING');
            const data = result.recordsets;
            return data[0];
        }
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function GET_IDVATPHAM() {
    try {
        const connection = await db.connect();
        const result = await connection.request().query(`select distinct VATPHAM from RATING order by VATPHAM `);
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

async function GET_RATINGITEM(id) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(
                `select ID_RATING, RATING, TEN_KHACHHANG from RATING a join KHACHHANG b on a.KHACHHANG = b.ID_KHACHHANG where VATPHAM = ${id}`,
            );
        const data = result.recordsets;
        return data[0];
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { GET_RATING, GET_IDVATPHAM, GET_RATINGITEM };
