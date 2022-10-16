const login = require('../../config/db/login');

class LoginController {
    //[POST] /login
    async index(req, res, next) {
        const body = req.body;
        const data = await login.LOGIN(body.ACCOUNT, body.PASSWORD);
        if (data.length == 0) res.status(400).send('Sai tài khoản hoặc mật khẩu!');
        else {
            // const token = helper.generateAccessToken({ username: body.ACCOUNT });
            // res.json({
            //     ID: data[0].ID,
            //     TOKEN: token,
            // });
            res.status(200).send(data[0]);
        }
    }
}

module.exports = new LoginController();
