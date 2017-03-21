var express = require('express');
var router = express.Router();

let Message = require('../models/message');

//auth check
function isLoggedIn(req, res, next) {
   if(req.isAuthenticated()) {
      return next(); //user is logged, so call the next function
   } else {
      res.redirect('/'); //not logged in so redirect to home
   }
}

/* GET messages index */
router.get('/', function(req, res, next) {

   // use mongoose model to query mongodb for all messages created on contact page
   Message.find(function(err, messages) {
      if (err) {
         console.log(err);
         res.end(err);
         return;
      }

      // no error so send the messages to the index view
      res.render('messages/index', {
         messages: messages,
         title: 'Message List', 
         user: req.user,
         currentPage: 'Message Index'
      });
   });
});

// GET /messages/delete/_id - delete and refresh the index view
router.get('/delete/:_id', isLoggedIn, function(req, res, next) {
   // get the id parameter from the end of the url
   let _id = req.params._id;

   // use Mongoose to delete
   Message.remove({ _id: _id }, function(err) {
      if (err) {
         console.log(err);
         res.render('error');
         return;
      }
      res.redirect('/messages');
   });
});

// GET /messages/_id - show edit page and pass it the selected message
router.get('/:_id', isLoggedIn, function(req, res, next) {
   // grab id from the url
   let _id = req.params._id;

   // use mongoose to find the selected message
   Message.findById(_id, function(err, message) {
      if (err) {
         console.log(err);
         res.render('error');
         return;
      }
      res.render('messages/edit', {
         message: message,
         title: 'Message Details',
         user: req.user,
         currentPage: 'Message Edit'
      });
   });
});

// POST /messages/_id - save the updated message
router.post('/:_id', isLoggedIn, function(req, res, next) {
   // grab id from url
   let _id = req.params._id;

   // populate new message from the form
   let message = new Message({
      _id: _id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message
   });

   Message.update({ _id: _id }, message,  function(err) {
      if (err) {
         console.log(err);
         res.render('error');
         return;
      }
      res.redirect('/messages');
   });
});


// make this file public
module.exports = router;