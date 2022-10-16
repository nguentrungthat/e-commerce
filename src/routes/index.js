const loginRoute = require('./login');
const itemsRoute = require('./items');
const khachhangsRoute = require('./khachhangs');
const donmuasRoute = require('./donmuas');
const storesRoute = require('./stores');
const dashboardsRoute = require('./dashboards');
const ratingRoute = require('./rating');

function route(app) {
    app.get('/', function (req, res) {
        res.render('home');
    });

    app.use('/login', loginRoute);

    app.use('/items', itemsRoute);

    app.use('/khachhangs', khachhangsRoute);

    app.use('/donmuas', donmuasRoute);

    app.use('/stores', storesRoute);

    app.use('/dashboards', dashboardsRoute);

    app.use('/rating', ratingRoute);
}

module.exports = route;
