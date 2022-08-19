const db = require('./index');
const query = require('../../app/lib/UsersQuery');


async function GET ()  {
    try {
        const connection = await db.connect();
        const result = await connection.execute(query.users());
        const data = result.rows;
        return data;
    } catch (err) {
      console.log('Error users: ', err)
    }
}

//GET by User_ID
async function GET_ID (id)  {
    try {
        const connection = await db.connect();
        const result = await connection.execute(query.user_id(id));
        const data = result.rows[0];
        return data;
    } catch (err) {
      console.log('Error user: ', err)
    }
  }

module.exports = {GET, GET_ID };