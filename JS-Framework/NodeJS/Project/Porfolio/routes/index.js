var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET detail page. */
router.get('/detail', function(req, res, next) {
  res.render('detail');
});

/* GET detail page. */
router.get('/*.:id', function(req, res, next) {
  res.render('detail', {id: req.params.id});
});

module.exports = router;
