const guard = require("express-jwt-permissions")();

function checkAdmin(req,res,next){
    const permission = req.users.permissions;
    console.log(permission);
    if(permission == 'admin'){

        guard.check(permission);
        next()
    }else{
        res.send("not admin");
    }
}

module.exports = {
    checkAdmin
}