const express = require('express');
const multer = require('multer');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const { extname } = require('path');
const route = require('./routes');
const cors = require('cors');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
var upload = multer({ storage: storage });

//const db = require('./config/db');

const app = express();

app.use(
    cors({
        origin: '*',
    }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.single('file'));
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

//Route init
route(app);

const server = app.listen(8081, function () {
    const host = 'localhost';
    const port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);
});
