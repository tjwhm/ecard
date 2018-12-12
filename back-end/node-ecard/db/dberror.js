class DbError {
    //数据库连接错误返回
    static connectionError(res, err) {
        if(err) {
            res.send(JSON.stringify({
                "error_code": 1,
                "message": "数据库连接错误",
                "data": []
            }));
        }
    };

//sql语句执行错误返回
    static sqlError(res,err) {
        console.log(err);
        if(err) {
            res.send(JSON.stringify({
                "error_code": 2,
                "message": "sql语句错误",
                "data": []
            }));
        }
    };
}

module.exports = DbError;
