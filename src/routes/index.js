const usersRoute = require('./users');
const loginRoute = require('./login');
const itemsRoute = require('./items');



function route(app){

    app.get('/', function (req, res) {
        res.render('home');
    })


    app.use('/users', usersRoute);

    app.use('/login', loginRoute);

    app.use('/items', itemsRoute);


}

module.exports = route;