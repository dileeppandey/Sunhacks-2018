var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/getdata', function (req, res, next) {
  res.send('respond with a resource getdata');
});

module.exports = router;
