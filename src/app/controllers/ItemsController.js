const GET = require('../../config/db/items');
const spawner = require('child_process').spawn;

class ItemsController {
    //[GET] /items
    async index(req, res) {
        const data = await GET.GET_ITEMS();
        return res.json(data);
    }

    //[POST] /id
    async id(req, res) {
        const ID = req.body.ID_VATPHAM;
        const data = await GET.GET_BYID(ID);
        return res.json(data);
    }

    //[POST] /images
    async images(req, res) {
        const ID = req.body.ID_VATPHAM;
        const data = await GET.GET_IMAGES(ID);
        if (data.length > 0) {
            return res.send(data);
        } else {
            return res.send([{ TEN_HINHANH: 'logo2.png' }]);
        }
    }

    //[POST] /recommend
    async recommend(req, res) {
        const ID = req.body.ID_KHACHHANG;
        const CF = spawner('python', ['./src/Recommendation/main.py', ID]);
        var data = [];
        var promise = new Promise((resolve) => {
            CF.stdout.on('data', (data) => {
                resolve(JSON.parse(data.toString()));
            });
        });
        data = await promise.then((value) => value);
        return res.json(data);
    }

    //[GET] /loai
    async getloai(req, res) {
        let data = [];
        data = data.concat(await GET.GET_LOAI_AO());
        data = data.concat(await GET.GET_LOAI_QUAN());
        data = data.concat(await GET.GET_LOAI_GIAY());
        data = data.concat(await GET.GET_LOAI_PHUKIEN());
        return res.json(data);
    }

    //[POST] /create
    async create(req, res) {
        try {
            let body = req.body;
            for (const value of body) {
                console.log(value);
                await GET.CREATE(value);
            }
            return res.status(200).send();
        } catch {
            return res.status(500).send();
        }
    }

    //[POST] /delete
    async delete(req, res) {
        try {
            let body = req.body;
            for (const value of body) {
                await GET.DELETE(value);
            }
            return res.status(200).send();
        } catch {
            return res.status(500).send();
        }
    }

    //[POST] /update
    async update(req, res) {
        try {
            let body = req.body;
            let string = '';
            for (const value of body) {
                switch (value.field) {
                    case 'col1':
                        string = `UPDATE VATPHAM SET TEN_VATPHAM = N'${value.value}' WHERE ID_VATPHAM = ${value.id}`;
                        break;
                    case 'col2':
                        string = `UPDATE VATPHAM SET GIABAN = ${value.value} WHERE ID_VATPHAM = ${value.id}`;
                        break;
                    case 'col3':
                        string = `UPDATE VATPHAM SET SOLUONG_TONKHO = ${value.value} WHERE ID_VATPHAM = ${value.id}`;

                        break;
                    case 'col4':
                        string = `UPDATE VATPHAM SET SOLUONG_DABAN = ${value.value} WHERE ID_VATPHAM = ${value.id}`;
                        break;
                    case 'col5':
                        string = `UPDATE VATPHAM SET CUAHANG = ${value.value} WHERE ID_VATPHAM = ${value.id}`;
                        break;
                    case 'col6':
                        string = `UPDATE VATPHAM SET LOAI = N'${value.value}' WHERE ID_VATPHAM = ${value.id}`;
                        break;
                    case 'col7':
                        string = `UPDATE VATPHAM SET MOTA_VATPHAM = N'${value.value}' WHERE ID_VATPHAM = ${value.id}`;
                        break;
                    case 'col8':
                        string = `UPDATE VATPHAM SET SIZE = N'${value.value}' WHERE ID_VATPHAM = ${value.id}`;
                        break;
                    case 'col9':
                        string = `UPDATE VATPHAM SET COLOR = N'${value.value}' WHERE ID_VATPHAM = ${value.id}`;
                        break;
                    case 'col10':
                        string = `UPDATE VATPHAM SET XUATXU = N'${value.value}' WHERE ID_VATPHAM = ${value.id}`;
                        break;
                }
                await GET.UPDATE(string);
            }
            return res.status(200).send();
        } catch {
            return res.status(500).send();
        }
    }

    async loai(req, res) {
        const item = await GET.GET_BYID(req.body.ID_VATPHAM);
        const loai = item[0].LOAI;
        const data = await GET.LOAI(loai.slice(0, 2));
        return res.json(data);
    }

    async search(req, res) {
        const data = await GET.SEARCH(req.body.SEARCH);
        return res.json(data);
    }
}

module.exports = new ItemsController();
