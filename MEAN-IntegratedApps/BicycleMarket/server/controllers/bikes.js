// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.



var mongoose = require('mongoose');
var Bike = mongoose.model('Bike');

module.exports = {

  show: function(req, res) {
    Bike.find({}, function(err, bikes) {
      res.render('bikes', {bikes: bikes});
    })
  },

  // retrieve: function(req, res) {
  //   Bike.findById(id:req.params.id, function(err, bike) {
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
