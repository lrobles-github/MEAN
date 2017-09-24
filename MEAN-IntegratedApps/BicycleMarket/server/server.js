// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

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

// // Setting our Views Folder Directory
// app.set('views', path.join(__dirname, './views'));

// // Setting our View Engine set to EJS
// app.set('view engine', 'ejs');

// // Seeting up Mongoose
// var mongoose = require('mongoose');

// // This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
// //   our db in mongodb -- this should match the name of the db you are going to use for your project.
// mongoose.connect('mongodb://localhost/basic_mongoose');

// // Create starter schema
var BikeSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    location: String
   })
   mongoose.model('Bike', BikeSchema); // We are setting this Schema in our Models as 'Bike'
   var Bike = mongoose.model('Bike') // We are retrieving this Schema from our Models, named 'Bike'
   
   mongoose.Promise = global.Promise;


// Routes
// Root Request
app.get('/test', function(request, response) {
    console.log('server.js ==> worked ')
    return true;
  })



//   // require the mongoose configuration file which does the rest for us
// require('./server/config/mongoose.js');

// // store the function in a variable
// var routes_setter = require('./server/config/routes.js');

// // invoke the function stored in routes_setter and pass it the "app" variable
// routes_setter(app)


  // Setting our Server to Listen on Port: 1337
app.listen(1337, function() {
    console.log("listening on port 1337");
})