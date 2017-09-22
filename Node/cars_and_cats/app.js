var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.get('/', function (request, response) {
    response.send("<h1>select cars or cats in the url...</h1>");
})

app.get('/cars', function (request, response) {
    response.render("cars");
})

app.get('/cats', function (request, response) {
    response.render("cats");
})

app.get('/new', function (request, response) {
    response.render("new");
})

app.post('/new', function (request, response) {
    response.redirect("/");
})

app.listen(7077, function () {
    console.log("listening on port 7077");
})

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');