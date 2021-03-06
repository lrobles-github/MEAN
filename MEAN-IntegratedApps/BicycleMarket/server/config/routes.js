// require controllers
var bikes = require('../controllers/bikes.js');
var users = require('../controllers/users.js');


module.exports = function (app) {

    // Users
    app.post("/users", (req, res, next) => {
    
        User.create(req.body, function(err, user){
            if(err){ 
                // req.flash('registrationErrors', err.errors);
                // req.flash('formData', req.body);
                return res.redirect('/')  
            } else {
                // req.flash('registrationSuccess', 'Successful Registration - Please Login');
                return res.redirect('/')  
            }
            
        })
    });

    // Bikes
    app.get('/', function (req, res) {
        console.log('in home page');
        res.render("index");
    })

    // Retrieve all
    app.get('/bikes', function (req, res) {
        console.log('in bikes route');
        bikes.show(req, res);
    })

    // Retrieve by id
    app.get("/bikes/:id", (req, res) => {
        console.log('in bike-by-id route');
        bikes.retrieve(req, res);
    })

    // Create bike
    app.post("/bikes", (req, res) => {
        console.log('in create-bike post route');
        
    })

    // edit bike
    app.put("/bikes/:id", (req, res) => {
        console.log('in edit-bike-by-id route');
    })

    // delete bike
    app.delete("/bikes/:id", (req, res) => {
        console.log('in delete-bike-by-id route');  
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });

}