const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN, { expiresIn: '2h' });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN, function(err, user){

    if (err) {
      console.log(err);
      return res.sendStatus(403);
    };

    req.user = user

    next()
  })
}

function formatDate(date){
    let date1 = date.slice(0,16);
    let date2 = date.slice(16,24);
    date = date1 + date2;
    return date;      
}

function check(data, elm){
    return data ? data : elm;
}

module.exports = {formatDate, check, authenticateToken, generateAccessToken };
