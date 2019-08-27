var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "products"
});

router.all('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
})

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
});

// api get data from postgreSQL
router.get('/getdata', function (req, res, next) {
  var sql = 'SELECT * FROM product_info';
  con.query(sql, function (error, result) {
    if (error) {
      res.send(error)
    } else {
      console.log(result);
      res.send(result)
    }
  })
});

router.get('/add', function (req, res, next) {
  res.render('add', {});
});

router.post('/add', function (req, res, next) {
  var product_name = req.body.product_name;
  var product_price = req.body.product_price;
  var product_image = req.body.product_image;
  var sql = 'INSERT INTO product_info (product_name, product_price, image) VALUES ?';
  var values = [[product_name, product_price, product_image]];
  con.query(sql, [values], (error, result) => {
    if (error) {
      res.send(error)
    } else {
      res.send('insert success');
    }
  })
});

module.exports = router;
