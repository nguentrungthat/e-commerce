const db = require('./index');

//[POST] /login
async function LOGIN (email, pass)  {
    try {
        const connection = await db.connect();
        const result = await connection.execute(
            `SELECT ID FROM GV_USERS WHERE EMAIL = '${email}' AND PASSWORD = '${pass}'` 
        );
        return result.rows;
    } catch (err) {
      console.log('Error login: ',err)
    }
}

module.exports = {LOGIN };
