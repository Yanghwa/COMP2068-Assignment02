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

// make this file public
module.exports = router;