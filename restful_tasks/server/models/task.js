// This is the file that specifies the schema to be loaded by mongoose.
// This file is required by mongoose.js.
// We do not need to require this file in the controller, instead, the model itself is loaded from mongoose.
// There can be many models in the server/models folder.


var mongoose = require('mongoose');

var Schema = mongoose.Schema; // to make associations

// Task schema
var TaskSchema = new mongoose.Schema({
    name: String,
   });
   mongoose.model('Task', TaskSchema); // Set Schema
   var Task = mongoose.model('Task'); // Retrieve Schema