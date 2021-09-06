const users = require("../data/dataUser.json");
function findUser(username){
    return new Promise((resolve,reject) =>{
        const result = users.find((user) =>{
            return user.username === username
        })
        resolve(result);
    })
}


module.exports = {
    findUser
}
