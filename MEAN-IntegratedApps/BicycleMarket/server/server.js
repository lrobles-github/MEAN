// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Require path
const path = require('path'); 

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, '/public/dist')));

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
// var UserSchema = new mongoose.Schema({
//     name: String,
//     age: Number
//    })
//    mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
//    var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
   
//    mongoose.Promise = global.Promise;


// Routes
// Root Request
app.get('/test', function(request, response) {
    response.send("<h1>Node says: Connected!</h1>");
    console.log('server.js ==> worked ')
    return true;
  })

  // Setting our Server to Listen on Port: 4200
app.listen(4200, function() {
    console.log("listening on port 4200");
})


// app.set('views', __dirname + '/views');

// app.set('images', __dirname + '/images');

// app.set('view engine', 'ejs');