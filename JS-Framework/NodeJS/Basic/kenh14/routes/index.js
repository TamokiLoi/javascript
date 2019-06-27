var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET news page. */
router.get('/news', function(req, res, next) {
  res.render('new', { title: 'News' });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('product', { title: 'Products', content: 'This is page product' });
});

module.exports = router;
