var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

/* GET about page. */
router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET post page. */
router.get('/post.html', function(req, res, next) {
  res.render('post', { title: 'Sample Post'});
});

/* GET contact page. */
router.get('/contact.html', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

module.exports = router;
