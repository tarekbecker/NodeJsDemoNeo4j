/**
 * @author Tarek Auel
 * @since Sep 08, 2014
 */

// include express library
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./router.js')(express);

console.log('Loaded all modules successfully');

function server(testMode) {

        // configure app to use bodyParser()
        // this allows to get the data of post requests
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        // set the port the server should use
        var port = process.env.PORT || 8080;

        app.use('', router);

        if (testMode !== true) {
            app.listen(port);
            console.log('Server is running on port: ' + port);
        }

        return app;
}

module.exports = server;


