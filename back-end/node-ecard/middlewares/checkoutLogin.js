/**
 * 判断是否登录的middleware
 * @param req
 * @param res
 * @param next
 */
module.exports = (req,res,next)=>{
    // if(!req.query.userid){
    //     return res.redirect('/sign/in');
    // }

    req.session = {
        "user_number" : 3016218088,
        "location": "平园超市"
    };
    console.log(req.session.user_number);
    next();
};
