const db = require('./index');


//GET ITEMS
async function GET_STORES()  {
    try {
        const connection = await db.connect();
        //const str = query.GetLevels();
        const result = await connection.request().query('SELECT * FROM STORE');
        const data = result.recordsets;
        return data[0];
    } catch (err) {
      console.log('Error: ', err)
    }
}

module.exports = {GET_STORES }
