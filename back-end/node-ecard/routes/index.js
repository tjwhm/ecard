var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * 用户登录的api
 * 暂定使用twt的sso
 */
router.get('login', function (req, res, next) {

});

/**
 * 用户登出的api
 */
router.get('logout', function (req, res, next) {

});

/**
 * 获取用户登录以后的用户信息
 */
router.get('userinfo', function (req, res, next) {

});

/**
 * 流水查询api
 * 使用那个 user_id 和 user_type 查询类型
 */
router.get('/records', function (req, res, next) {
  // var error_code = 0;
  var data;
  if(req.query.userid) {
      data = {
          "error_code":0,
          "message":"测试成功",
          "data":{
              "userid":req.query.userid
          }
      };
  } else {
      data = {
          "error_code":1,
          "message":"哈哈哈",
          "data":{}
      };
  }
  res.send(JSON.stringify(data));
});

/**
 * 消费者的卡挂失
 */
router.put('card_status', function (req, res, next) {

});

/**
 * 商家的扣钱转入自己账户
 */
router.post('deal', function (req, res, next) {

});

/**
 * 查询用户信息
 */
router.get('users', function (req, res, next) {

});

/**
 * 充值和提现的api
 */
router.put('balnce', function (req, res, next) {
    
});

/**
 * 补办校园卡
 */
router.put('card_status', function (req, res, next) {

});
module.exports = router;
