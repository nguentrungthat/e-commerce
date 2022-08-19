
const sql = require('mssql');

const config = {
  user: 'Entiti',
  password: 'Entiti',
  server: 'localhost',
  database: 'THUONGMAIDIENTU',
  options: {
    trustedconnection: true,
    enableArithAbort : true, 
    instancename :'SQLEXPRESS',
    encrypt: true,
    trustServerCertificate: true,
  }
}

async function connect ()  {
  try {
      return await sql.connect(config);
  } catch (err) {
    console.log('Error connection: ', err)
  }
}

module.exports = {connect };
