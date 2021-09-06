const jwt = require("jsonwebtoken");


async function checkUser(req,res,next){
    const {authorization} = req.headers;
        if(authorization && authorization.startsWith("Bearer")){
            let token = authorization.split(" ")[1];
            const decode = jwt.verify(token,"jamshid_3101");
            req.users = decode;
            res.setHeader("Last-modified", Date.now());
            next();
        }else{
            res.send({
                message:"Auth error"
            })
        }
}

module.exports = {
    checkUser
}