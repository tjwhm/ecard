/**
 * 判断是否登录的middleware
 * @param req
 * @param res
 * @param next
 */
module.exports = (req,res,next)=>{
    console.log(req.session);
    if(!req.session.user_number){
        res.send(JSON.stringify({
            "error_code": 1000,
            "message": "请登录"
        }));
    } else {
        next();
    }

};
