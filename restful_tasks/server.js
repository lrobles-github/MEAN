// requires the routes and the mongoose configurations
// creates the express application, loads configurations onto it, and listens!


// Express
var express = require('express');
var app = express();

// body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// path
var path = require('path');

// static content
app.use(express.static(path.join(__dirname, './client/static')));

//  Views
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

// store the function in a variable
var routes_setter = require('./server/config/routes.js');

// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app)

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

