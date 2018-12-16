var express = require('express');
var Sso = require('twt-sso');
const request = require('request')
var pool = require('../db/db');
var dbError = require('../db/dberror');
var router = express.Router();
var sso = new Sso(34, 'PVr4AK3vrjgY8jZNJks1');
/* GET home page. */
router.get('/', function(req, res, next) {
    var link = "http:ecard.twtstudio.wang";
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
            res.json({
                "error_code": 1001,
                "message": err
            });
        }
        console.log("data");
        console.log(data);
        if(data != null && data.status == 1) {
            pool.getConnection(function (err, connection) {
                dbError.connectionError(res, err);
                var ssoResult = data.result;
                connection.query(
                    'select location from user where user_number = ?',
                    [ssoResult.user_number],
                    function (err, result) {
                        connection.release();
                        dbError.sqlError(res, err);
                        var location;
                        if(!result) {
                            connection.query(
                                'insert into user(user_number, user_name, avatar) values(?,?,?)',
                                [ssoResult.user_number, ssoResult.twt_name, ssoResult.extra.avatar],
                                function (err) {
                                    connection.release();
                                    dbError.sqlError(res, err);
                                }
                            );
                            location = "天津大学";
                        } else {
                            location = result[0].location;
                        }
                        req.session.user_name = ssoResult.twt_name;
                        req.session.user_number = ssoResult.user_number;
                        req.session.location = location;
                        console.log(req.session);
                        console.log("link");
                        var link = "127.0.0.1:8080/#/";
                        res.redirect(link);
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
    });
});


module.exports = router;
