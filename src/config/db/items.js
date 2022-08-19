const db = require('./index');


//GET ITEMS
async function GET_ITEMS()  {
    try {
        const connection = await db.connect();
        //const str = query.GetLevels();
        const result = await connection.request().query('SELECT * FROM VATPHAM');
        const data = result.recordsets;
        return data[0];
    } catch (err) {
      console.log('Error: ', err)
    }
}

module.exports = {GET_ITEMS }
