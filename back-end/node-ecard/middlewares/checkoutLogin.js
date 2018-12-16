/**
 * 判断是否登录的middleware
 * @param req
 * @param res
 * @param next
 */
module.exports = (req,res,next)=>{
    console.log(3016218088);
    req.session = {
      'user_number':3016218088
    };
    // req.session.user_number = 3016218088;
    console.log(3016218088);
    // if(!req.session.user_number){
    //     res.send(JSON.stringify({
    //         "error_code": 1000,
    //         "message": "请登录"
    //     }));
    // } else {
    console.log(req.session);
        next();
    // }

};
