var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Parry Sound Custom Decks, Docks and Renovations', currentPage: 'home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About J.S Costom Builders', currentPage: 'about' });
});

router.get('/news', function(req, res, next) {
  res.render('news', { title: 'News', currentPage: 'news' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio', currentPage: 'portfolio' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us', currentPage: 'contact' });
});

module.exports = router;
