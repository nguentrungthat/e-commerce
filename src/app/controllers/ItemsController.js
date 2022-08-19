const GET = require('../../config/db/items');

class GetsController{
    //[GET] /items
    async index(req, res){
        const data = await GET.GET_ITEMS(); 
        res.json(data);
    }

 
}

module.exports = new GetsController