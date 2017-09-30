// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.



var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

  // show: function(req, res) {
  //   Task.find({}, function(err, tasks) {
  //     res.render('tasks', {tasks: tasks});
  //   })
  // },

  // retrieve: function(req, res) {
  //   Task.findById(id:req.params.id, function(err, task) {
  //       res.render('task', {task: task});
  //   })
  // },

  create: function(req, res) {
    var user = new User({name: req.body.name});
    user.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/');
      }
    })
  }
}
