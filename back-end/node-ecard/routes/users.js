var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hh', function (req, res, next) {
  var data = {
      'error_code':0,
      'message':"一次测试",
      'data':[]
  };

   res.send(JSON.stringify(data));
});
module.exports = router;
