const USERS = require('../../config/db/users');
const helper = require('../lib/helper');

class UsersController{
    //[GET] /users
    async index(req, res){
        const data = await USERS.GET();
        res.json(data);
    }

    //[POST] /users/id
    async id(req, res){
        const id = req.body.ID;
        const data = await USERS.GET_ID(id);
        res.json(data);
    }


}

module.exports = new UsersController;
