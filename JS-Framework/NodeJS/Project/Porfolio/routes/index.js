var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET detail page. */
router.get('/detail', function (req, res, next) {
  res.render('detail');
});

/* GET detail page by ID. */
router.get('/*.:id', function (req, res, next) {
  var idProduct = req.params.id;
  if (!req.session.viewedProducts) {
    req.session.viewedProducts = [];
  }
  if(req.session.viewedProducts.indexOf(idProduct) == -1) {
    req.session.viewedProducts.push(idProduct);
  }
  res.render('detail', { id: req.params.id, listViewedProducts: req.session.viewedProducts });
});

/* GET list page. */
router.get('/list', function (req, res, next) {
  res.render('list', { list: req.session.viewedProducts });
});

module.exports = router;
