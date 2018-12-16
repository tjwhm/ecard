var express = require('express');
var Sso = require('twt-sso');
const request = require('request')
var pool = require('../db/db');
var dbError = require('../db/dberror');
var router = express.Router();
var sso = new Sso(34, 'PVr4AK3vrjgY8jZNJks1');
/* GET home page. */
router.get('/', function(req, res, next) {
    var link = "http://127.0.0.1:3000/api/login/storage";
    res.redirect(sso.getLoginUrl(link));
});

/**
 * 登陆信息的存储
 */
router.get('/storage', function (req, res, next) {
    var token = req.query.token;
    sso.getUserInfo(token, function (err, data) {
        //异常处理
        if(err) {
            console.log({
                "error_code": 1001,
                "message": err
            });
        }
        console.log(data);
        console.log(data.status);
        if(data != null && data.status == 1) {
            pool.getConnection(function (err, connection) {
                dbError.connectionError(res, err);
                var ssoResult = data.result;
                connection.query(
                    'select count(id)，  from user where user_number = ?',
                    [ssoResult.user_number],
                    function (err, result) {
                        connection.release();
                        dbError.sqlError(res, err);
                        if(!result) {
                            connection.query(
                                'insert into user(user_number, user_name, avatar) values(?,?,?)',
                                [ssoResult.user_number, ssoResult.twt_name, ssoResult.extra.avatar],
                                function (err) {
                                    connection.release();
                                    dbError.sqlError(res, err);
                                }
                            );
                        }
                    }
                );

            });
        } else {
            res.send(JSON.stringify({
                "error_code": 1000,
                "message": "登录失败请重新登录",
                "data":[]
            }));
        }


        // res.send(JSON.stringify({
        //     "error_code": 0,
        //     "message": "???",
        //     "data": 1
        // }));
    });
});


module.exports = router;
