var mysql = require('mysql');

//mysql链接池
module.exports = pool = mysql.createPool({
    host: 'sgxm.info',
    user: 'ecard',
    password: 'webLWZZ',
    port: '3306',
    database: 'ecard',
    // 最大连接数，默认为10
    connectionLimit: 10,
});


