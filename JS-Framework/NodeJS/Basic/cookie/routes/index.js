var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET send number page. */
router.get('/send/:number', function(req, res, next) {
  res.cookie('phoneNumber', req.params.number, {maxAge:90000});
  res.send('Phone number send is: ' + req.params.number);
});

/* GET get number page. */
router.get('/get', function(req, res, next) {
  res.send('Phone number get is: ' + req.cookies.phoneNumber);
});

/* GET clear number page. */
router.get('/clear', function(req, res, next) {
  res.clearCookie('phoneNumber');
  res.send('Phone Number is deleted');
});

/* GET create session  page. */
router.get('/create-session', function(req, res, next) {
  req.session.password = '123456';
  res.send('Created session');
});

/* GET get session  page. */
router.get('/get-session', function(req, res, next) {
  res.send('Session is: ' + req.session.password);
});

/* GET clear session  page. */
router.get('/clear-session', function(req, res, next) {
  req.session.destroy(function(err) {
    console.log(err)
  });
  res.send('Session is deleted:');
});

module.exports = router;
