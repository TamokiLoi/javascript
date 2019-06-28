var express = require('express');
var router = express.Router();

/* GET fashion page. */
router.get('/mot-14.html', function(req, res, next) {
  res.send('This is page fashion > mot');
});

/* GET fashion page. */
router.get('/lam-dep.html', function(req, res, next) {
  res.send('This is page fashion > lam dep');
});

/* GET fashion page. */
router.get('/my-pham.html', function(req, res, next) {
  res.send('This is page fashion > my pham');
});

module.exports = router;
