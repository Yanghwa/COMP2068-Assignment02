var express = require('express');
var router = express.Router();
//add passport for reg and login
let passport = require('passport');
let Account = require('../models/account');
//setting imageuploader
let multer  = require('multer');
let crypto = require('crypto');
let path = require('path');
let fs = require('fs');
let testUpload = 'public/images/uploads/';
let storage = multer.diskStorage({
  destination: 'public/images/uploads/',
  filename: function (req, file, cb) {
     crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err);
      cb(null, raw.toString('hex') + path.extname(file.originalname));
    });
  }
});

let upload = multer({ storage: storage });

let type = upload.single('image');
let util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Parry Sound Custom Decks, Docks and Renovations', currentPage: 'home', user: req.user });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About J.S Costom Builders', currentPage: 'about', user: req.user });
});

/* GET news page. */
router.get('/news', function(req, res, next) {
  res.render('news', { title: 'News', currentPage: 'news', user: req.user });
});

/* GET portfolio page. */
router.get('/portfolio', function(req, res, next) {
  fs.readdir(testUpload, function(err, files) {
    res.render('portfolio', { title: 'Portfolio', currentPage: 'portfolio', user: req.user, uploadedFiles: files });
  });
});

/* POST portfolio page*/
router.post('/portfolio', type, function (req, res, next) {
  if(req.isAuthenticated()) {
    console.log('file info: ',req.file);
    console.log('file info: ',req.file.path);
    console.log('file info: ',req.file.originalname);
    //split the url into an array and then get the last chunk and render it out in the send req.
    var pathArray = req.file.path.split( '/' );

    // res.send(util.format(' Task Complete \n uploaded %s (%d Kb)'
    //     , req.file.name
    //     , req.file.size / 1024 | 0
    //     , req.file
    //     , '<img src="' + pathArray[(pathArray.length - 1)] + '">'
    // ));
    res.redirect('/portfolio');
  } else {
    res.redirect('/portfolio');
  }
  
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us', currentPage: 'contact', user: req.user });
});

/* POST contact page*/
router.post('/contact', function(req, res, next) {
  let Message = require('../models/message');
  Message.create({
  	name:req.body.name,
  	email: req.body.email,
	phone: req.body.phone,
	message: req.body.message
  }, function(err, book) {
		if (err) {
		   console.log(err);
		   res.render('error');
		   return;
		}
		res.redirect('/contact');
   });
});

/* GET register */
router.get('/register', function(req, res, next) {
  // load the register.ejs view
  res.render('register', {
    title: 'Register', user: null, currentPage: 'register'
  });
});

/* GET login */
router.get('/login', function(req, res, next) {
  let messages = req.session.messages || [];
  //clear messages from session
  req.session.messages = [];
  res.render('login', {
    title: 'Login', messages: messages, user: null, currentPage: 'login'
  });
});

/* POST register*/
router.post('/register', function(req, res, next) {
  //use the Account model to create a new user account
  Account.register(new Account({ username: req.body.username}), 
    req.body.password, function(err, account){
      if(err) {
        console.log(err);
        res.render('error', {title: 'Create Account Error'});
      }
      res.redirect('/login');
  });
});

/* POST login*/
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  successMessage: 'Thank you to login',
  failureRedirect: '/login',
  failureMessage: 'Invalid Login'
}));

/* GET logout */
router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

/* GET facebook */
router.get('/facebook',
  passport.authenticate('facebook', {scope:'email'}));
 
router.get('/facebook/callback',
  passport.authenticate('facebook', {  failureRedirect: '/login',scope:'email' }),
  function(req, res) {
    // Successful authentication, redirect to index. 
    res.redirect('/');
});

module.exports = router;
