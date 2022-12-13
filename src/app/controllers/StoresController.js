const STORE = require('../../config/db/stores');

class StoresController {
    //[GET] /stores
    async index(req, res) {
        const data = await STORE.GET_STORES();
        res.json(data);
    }

    async create(req, res) {
        try {
            let body = req.body;
            for (const value of body) {
                await STORE.CREATE(value);
            }
            return res.status(200);
        } catch {
            return res.status(400);
        }
    }

    async update(req, res) {
        try {
            let body = req.body;
            let string = '';
            for (const value of body) {
                switch (value.field) {
                    case 'col1':
                        string = `UPDATE STORE SET TEN_STORE = N'${value.value}' WHERE ID_STORE = ${value.id}`;
                        break;
                    case 'col2':
                        string = `UPDATE STORE SET SDT = ${value.value} WHERE ID_STORE = ${value.id}`;
                        break;
                    case 'col3':
                        string = `UPDATE STORE SET ADDRESS = ${value.value} WHERE ID_STORE = ${value.id}`;
                        break;
                    case 'col4':
                        string = `UPDATE STORE SET WARD = ${value.value} WHERE ID_STORE = ${value.id}`;
                        break;
                    case 'col5':
                        string = `UPDATE STORE SET DISTRICT = ${value.value} WHERE ID_STORE = ${value.id}`;
                        break;
                    case 'col6':
                        string = `UPDATE STORE SET PROVINCE = ${value.value} WHERE ID_STORE = ${value.id}`;
                        break;
                }
                await STORE.UPDATE(string);
            }
            return res.status(200);
        } catch {
            return res.status(400);
        }
    }

    async delete(req, res) {
        try {
            let body = req.body;
            for (const value of body) {
                await STORE.DELETE(value);
            }
            return res.status(200);
        } catch {
            return res.status(400);
        }
    }

    async khachhang(req, res) {
        const data = await STORE.GET_STORE_BTKH(req.body.ID_KHACHHANG);
        res.json(data[0]);
    }

    async xetduyet(req, res) {
        try {
            let body = req.body;
            for (const value of body) {
                await STORE.UPDATE(`UPDATE STORE SET STATUS = 1 WHERE ID_STORE = ${value}`);
            }
            return res.status(200).send();
        } catch {
            return res.status(500).send();
        }
    }
}

module.exports = new StoresController();
