const GET = require('../../config/db/stores');

class StoresController{
    //[GET] /stores
    async index(req, res){
        const data = await GET.GET_STORES(); 
        res.json(data);
    }

 
}

module.exports = new StoresController