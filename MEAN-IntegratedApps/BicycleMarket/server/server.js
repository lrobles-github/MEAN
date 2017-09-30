// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// session
var session = require('express-session');
app.use(session({
  secret: 'whatever', 
  saveUninitialized: true,
  resave: 'true'
}));


// Create the mongoose object
var mongoose = require('mongoose');

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Require path
const path = require('path'); 

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './../public/bikemarket/dist')));

// Set Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bikes_db', {useMongoClient: true});
mongoose.Promise = global.Promise;

// require the mongoose configuration file
require('./config/mongoose.js');

// Set routes configuration
var routes_setter = require('./config/routes.js');
routes_setter(app)

  // Setting our Server to Listen on Port: 1337
app.listen(1337, function() {
    console.log("listening on port 1337");
})