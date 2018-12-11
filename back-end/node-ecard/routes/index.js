var express = require('express');
//判断是否登录的中间键
var checkoutLogin = require('../middlewares/checkoutLogin');
//mysql链接池
var pool = require('../db/db');
var dbError = require('../db/dberror');
var router = express.Router();

//使用checkoutLogin中间键
router.use(checkoutLogin);

/* GET home page. */
router.get('/mysql-test', function(req, res, next) {
    console.log("test");
    pool.getConnection(function (err, connection) {
        if(err){
            console.log(err);
        }
        connection.query('select * from user', function (err, result) {
            connection.release;
            if(err) {
            }else {
            }

            console.log(result[0]);
        })
    });
});


/**
 * 用户登出的api
 */
router.get('logout', function (req, res, next) {

});

/**
 * ok 获取用户登录以后的用户信息
 */
router.get('/userinfo', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        if(err){
            res.connectionError(res, err);
        }

        connection.query(
            'select type, user_name, balance, avatar, is_lost from user where user_number = ?',
            [req.session.user_number],
            function (err, result) {
            connection.release();
            if(err) {
                dbError.sqlError(res, err);
            }else {
                data = {
                    "user_type": result[0].type,
                    "username": result[0].user_name,
                    "balance": result[0].balance,
                    "avatar_url": 'https://i.twtstudio.com'.result[0].avatar,
                    "card_status": result[0].is_lost
                };
                res.send(JSON.stringify({
                    "error_code":0,
                    "message":"用户的完整数据",
                    "data":data
                }));
            }
        })
    });
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
 * ok 商家的扣钱转入自己账户
 */
router.post('/deal', function (req, res, next) {
    //post参数获取
    var card_id = req.body.card_id;
    var value = req.body.value;
    //获取商家地址
    var location = req.session.location;
    var latest_balance;
    var balance;
    //当前时间时间戳
    var timestamp;
    timestamp = new Date();
    timestamp = timestamp.getTime();

    pool.getConnection(function (err, connection) {
        if(err){
            dbError.connectionError(res, err);
        }
//商家部分的相关处理
        connection .query(
            'select balance from user where user_number = ?',
            [res.session.user_number],
            function (err, result) {
                connection.release();
                if(err) {
                    dbError.sqlError(res, err);
                }
                balance = result[0].balance;
                latest_balance = balance + value;
            }
        );
        //更新商家最新的余额
        connection.query(
            'update user set balance = ? where user_number = ?',
            [latest_balance, req.session.user_number],
            function (err) {
                connection.release();
                dbError.sqlError(res, err);
            }
        );
        //插入商家具体记录
        connection.query(
            'insert into recode(type, card_id, value, location, latest_balance) values(?,?,?,?,?)',
            [0, req.session.user_number, value, location, latest_balance],
            function (err) {
                connection.release();
                dbError.sqlError(res, err);
            }
        );

//消费者部分的相关处理
        connection .query(
            'select balance from user where user_number = ?',
            [card_id],
            function (err, result) {
                connection.release();
                if(err) {
                    dbError.sqlError(res, err);
                }
                balance = result[0].balance;
                latest_balance = balance - value;
            }
        );
        //跟新消费者最新的余额
        connection.query(
            'update user set balance = ? where user_number = ?',
            [latest_balance, card_id],
            function (err) {
                connection.release();
                dbError.sqlError(res, err);
            }
        );
        //插入消费者具体记录
        connection.query(
            'insert into recode(type, card_id, value, location, latest_balance) values(?,?,?,?,?)',
            [0, card_id, value, location, latest_balance],
            function (err) {
                connection.release();
                dbError.sqlError(res, err);
            }
        );

        res.send(JSON.stringify({
            "error_code": 0,
            "message": "本次消费情况",
            "data": {
                "timestamp":timestamp,
                "type":0,
                "value":value,
                "location": location,
                "latest_balance": latest_balance
            }
        }));


    });
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
