var express = require('express');
var sso = require('twt-sso');
var checkoutLogin = require('../middlewares/checkoutLogin');
var router = express.Router();

// router.use(checkoutLogin);
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


module.exports = router;
