var mysql = require('mysql');

//mysql链接池
module.exports = pool = mysql.createPool({
    host: '192.168.33.10',
    user: 'root',
    password: '0824',
    port: '3306',
    database: 'ecard',
    // 最大连接数，默认为10
    connectionLimit: 10,
});


