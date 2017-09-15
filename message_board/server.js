// Express
var express = require('express');
var app = express();
// body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// path
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
//  Views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Mongoose
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/message_board', {useMongoClient: true});
var Schema = mongoose.Schema; // to make associations

// User schema
var UserSchema = new mongoose.Schema({
    name: String,
   })
   mongoose.model('User', UserSchema); // Set Schema
   var User = mongoose.model('User'); // Retrieve Schema

// Message Schema
var MessageSchema = new mongoose.Schema({
    message_content: { type: String, required: true, minlength: 4 },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]    
    },{ timestamps: true })
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

// Comment Schema
var CommentSchema = new mongoose.Schema({
        comment_content: { type: String, required: true },
        _message: {type: Schema.Types.ObjectId, ref: 'Message'},     
    }, { timestamps: true });
    mongoose.model('Comment', CommentSchema);
    var Comment = mongoose.model('Comment');

// Routes
// Root Request
app.get('/', function(req, res) {
    Message.find() 
        .populate('comments')
        .lean()
        .exec(function(err, messages) {
            if(err) {
                console.log('something went wrong');
            }
            else {
                console.log('successfully checked db!', messages);
                res.render('index', { allMessages: messages });
            }
    });
})


// New Message 
app.post('/new_message', function(req, res) {
    console.log("POST DATA", req.body);
    var message = new Message({message_content: req.body.message_content});
    message.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully created a new message!');
        res.redirect('/');
      }
    })
  })


  app.post('/new_comment/:id', function(req, res) {
    console.log("POST DATA", req.body);
    Message.findOne({_id: req.params.id}, function(err, message) {
        var comment = new Comment({comment_content: req.body.comment_content});
        console.log(comment);
        comment._message = message._id;
        comment.save(function(err) {

            message.comments.push(comment._id);
            message.save(function(err){
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('something went wrong');
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully created a new comment!');
                console.log('@@@=>>>',message);
                res.redirect('/');
            }
        });
    });
    });
});


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})