const login = require('../../config/db/login');
const USERS = require('../../config/db/users');
const helper = require('../lib/helper');

class LoginController{

    //[POST] /login
    async index(req, res, next){
        const body = req.body;
        const data = await login.LOGIN(body.EMAIL, body.PASSWORD);
        if (data.length == 0)
            res.json('Sai email hoặc password!');
        else{
            const token = helper.generateAccessToken({ username: body.EMAIL });
            res.json({
                ID: data[0].ID,
                TOKEN: token
            });
        }
    }

}

module.exports = new LoginController;
