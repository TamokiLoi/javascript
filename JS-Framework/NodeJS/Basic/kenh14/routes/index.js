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

/* GET params page. */
router.get('/product/:id/:price', function(req, res, next) {
  res.send('product id is: ' + req.params.id + ', price is: ' + req.params.price);
});

/* GET url-detail page. */
router.get('/*.:id', function(req, res, next) {
  // ?: không bắt buộc nội dung trước 1 chữ: tamoki?vn
  // ? và (): không bắt buộc nội dung trong ngoặc: tamo(ki)?vn
  // *: ở vị trí sao thêm bất kỳ ký tự nào đều được: zing*vn
  // *.:id url của trang tinhte.vn
  res.send('id post: ' + req.params.id);
});

module.exports = router;
