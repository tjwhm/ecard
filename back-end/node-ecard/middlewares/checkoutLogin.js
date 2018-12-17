/**
 * 判断是否登录的middleware
 * @param req
 * @param res
 * @param next
 */
module.exports = (req,res,next)=>{
    console.log(req.session);
    // req.session.user_number = 3016202253;
    // req.session.location = "爱湘菜";
    if(!req.session.user_number){
        res.send(JSON.stringify({
            "error_code": 1000,
            "message": "请登录",
            "data":[]
        }));
    } else {
        next();
    }

};
