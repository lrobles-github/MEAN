// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.



var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

  show: function(req, res) {
    User.find({}, function(err, users) {
      res.render('users', {users: users});
    })
  },

  // retrieve: function(req, res) {
  //   User.findById(id:req.params.id, function(err, bike) {
  //       res.render('bike', {bike: bike});
  //   })
  // },

//   create: function(req, res) {
//     var task = new Task({name: req.body.name, task: req.body.task});
//     task.save(function(err) {
//       if(err){
//         console.log("something went wrong");
//       } else {
//         res.redirect('/tasks');
//       }
//     })
//   }
}
