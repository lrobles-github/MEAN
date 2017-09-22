// require controllers


var tasks = require('../controllers/tasks.js');

module.exports = function (app) {

    app.get('/', function (req, res) {
        console.log('in home page');
        res.render("index");

    })

    // Retrieve all
    app.get('/tasks', function (req, res) {
        console.log('in tasks route');
        tasks.show(req, res);
    })

    // Retrieve by id
    app.get("/tasks/:id", (req, res) => {
        console.log('in task-by-id route');
        tasks.retrieve(req, res);
    })

    // Create task
    app.post("/tasks", (req, res) => {
        console.log('in create-task post route');
        
    })

    // edit task
    app.put("/tasks/:id", (req, res) => {
        console.log('in edit-task-by-id route');
    })

    // delete task
    app.delete("/tasks/:id", (req, res) => {
        console.log('in delete-task-by-id route');  
    })

};