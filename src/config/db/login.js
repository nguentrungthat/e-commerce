const db = require('./index');

//[POST] /login
async function LOGIN(account, pass) {
    try {
        const connection = await db.connect();
        const result = await connection
            .request()
            .query(`SELECT * FROM ACCOUNT WHERE TAIKHOAN = '${account}' AND MATKHAU = '${pass}'`);
        return result.recordsets[0];
    } catch (err) {
        console.log('Error login: ', err);
    }
}

module.exports = { LOGIN };
