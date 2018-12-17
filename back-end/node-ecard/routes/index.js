var express = require('express');
//判断是否登录的中间键
var checkoutLogin = require('../middlewares/checkoutLogin');
//mysql链接池
var pool = require('../db/db');
var dbError = require('../db/dberror');
var router = express.Router();

//使用checkoutLogin中间键
router.use(checkoutLogin);

/**
 * 用户登出的api
 */
router.get('/logout', function (req, res, next) {
    req.session.destroy(function () {
        res.send(JSON.stringify({
            "error_code":0,
            "message":"登出成功"
        }))
    });
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
            'select type, user_name, balance, avatar, card_status from user where user_number = ?',
            [req.session.user_number],
            function (err, result) {
            connection.release();
            if(err) {
                dbError.sqlError(res, err);
            }else {
                var data = {
                    "user_type": result[0].type,
                    "username": result[0].user_name,
                    "balance": result[0].balance,
                    "avatar_url": 'https://i.twtstudio.com/'+result[0].avatar,
                    "card_status": result[0].card_status
                };
                console.log(data);
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
  var card_id = req.query.card_id;
  var timestamp;
  timestamp = new Date();
  timestamp = timestamp.getTime();
  timestamp = timestamp - (86400 * 30);
  pool.getConnection(function (err, connection) {
      if(card_id) {
          connection.query(
              'select type, value, location, latest_balance, created_at from record where card_id = ? and created_at > ? order by id desc',
              [card_id, timestamp],
              function (err, result) {
                  connection.release();
                  dbError.sqlError(res, err);
                  for(i in result) {
                      result[i].record_type = type;
                      delete  result[i].type;
                      result[i].timestamp = result[i].created_at;
                      delete result[i].created_at;
                  }
                  res.send(JSON.stringify({
                      "error_code": 0,
                      "message": "用户近30天的流水",
                      "data": result
                  }));

              }
          );
      } else {
          connection.query(
              'select type, value, location, latest_balance, created_at from record where card_id = ? and created_at order by id desc',
              [req.session.user_number, timestamp],
              function (err, result) {
                  connection.release();
                  dbError.sqlError(res, err);
                  for(i in result) {
                      result[i].record_type = type;
                      delete  result[i].type;
                      result[i].timestamp = result[i].created_at;
                      delete result[i].created_at;
                  }
                  res.send(JSON.stringify({
                      "error_code": 0,
                      "message": "用户近30天的流水",
                      "data": result
                  }));

              }
          );
      }
  });

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
        console.log('商家');
        connection .query(
            'select balance from user where user_number = ?',
            [req.session.user_number],
            function (err, result) {
                connection.release();
                dbError.sqlError(res, err);
                balance = result[0].balance;
                latest_balance = balance + value;
                console.log('剩余值');
                console.log(latest_balance);
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

        console.log('消费者');
//消费者部分的相关处理
        connection .query(
            'select balance from user where user_number = ?',
            [card_id],
            function (err, result) {
                connection.release();
                console.log(result);
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

        console.log('消费类型');
        console.log('具体金额');
        console.log(value);
        console.log('地点');
        console.log(location);
        console.log('剩余值');
        console.log(latest_balance);
        //组后返回用户的具体信息
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
 * ok 查询用户信息
 */
router.get('/users', function (req, res, next) {
    var user_type = req.query.user_type;

    pool.getConnection(function (err, connection) {
        if(err) {
            dbError.connectionError(res, err);
        }
        connection.query(
            'select user_name, user_number, avatar, balance, card_status from user where type = ?',
            [user_type],
            function (err, result) {
                connection.release();
                if(err) {
                    dbError.sqlError(res, err);
                }
                for(var i in result){
                    result[i].avatar_url = (result[i].avatar == null)?null:'https://i.twtstudio.com'+result[i].avatar;
                    result[i].user_type = user_type;
                    delete result[i].avatar;
                }
                res.send(JSON.stringify({
                    "error_code": 0,
                    "message": "用户的具体信息",
                    "data": result
                }))
            }
        )
    })
});

/**
 * ok 充值和提现的api
 */
router.post('balnce', function (req, res, next) {
    var change_type = req.body.change_type;
    var value = req.body.value;
    var card_id = req.body.card_id;

    pool.getConnection(function (err, connection) {
        if(err) {
            dbError.connectionError(res, err);
        }

        connection.query(
            'select balance from user where user_number = ?',
            [card_id],
            function (err, result) {
                connection.release();
                if(err) {
                    dbError.sqlError(res, err);
                }
                var latest_balance;
                if(change_type) {
                    if (value > result[0].balance) {
                        res.send(JSON.stringify({
                            "error_code": -1,
                            "message": "金额不足",
                        }));
                    } else {
                        latest_balance = result[0].balance - value;
                    }
                } else {
                    latest_balance = result[0].balance + value;
                }

                connection.query(
                    'update user set balance = ? where user_number = ?',
                    [latest_balance, card_id],
                    function (err) {
                        connection.release();
                        dbError.sqlError(res, err);
                    }
                );

                connection.query(
                    'insert into records(card_id, type, value, location, latest_balance) values(?.?,?,?,?) ,' ,
                    [card_id, !change_type, value, req.session.location, latest_balance],
                    function (err) {
                        connection.release();
                        dbError.sqlError(res, err);
                    }
                );

                res.send(JSON.stringify({
                    "error_code":0,
                    "message": "成功"
                }));
            }
        );
    });
});

/**
 * ok 补办校园卡
 */
router.put('/card_status', function (req, res, next) {
    var change_type = req.body.change_type;
    var card_id = req.body.card_id;

    pool.getConnection(function (err, connection) {
        if(err) {
            dbError.connectionError(res, err);
        }

        connection.query(
            'update user set card_status = ? where  user_number = ?',
            [change_type, card_id],
            function (err) {
                connection.release();
                if(err) {
                   dbError.sqlError(res, err);
                }
                var message;
                if(change_type) {
                    message = "挂失成功";
                } else {
                    message = "解挂成功";
                }
                res.send(JSON.stringify({
                    "error_code":0,
                    "message": message
                }));
            }
        );
    });
});

module.exports = router;
