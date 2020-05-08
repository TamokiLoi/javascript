var express = require('express');
var router = express.Router();
var multer = require('multer');

// config storage path upload
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads');
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

// check type file when upload (only accepted type files: jpg, jpeg, png, gif)
function checkFileUpload(req, file, cb) {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    cb(new Error('Only files with the following extensions allowed: jpg, jpeg, png, gif!'))
  } else {
    cb(null, true);
  }
}

// config upload by multer
var upload = multer({ storage: storage, fileFilter: checkFileUpload });

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET data from form Homepage. */
router.post('/', upload.single('img_product'), function (req, res, next) {
  var title_product = req.body.title_product;
  res.send(title_product);
});

module.exports = router;
