const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {findUser} = require("../models/authModel");

async function login(req,res){
    console.log(req.headers)
    const {username,password} = req.body;

    const secret = "jamshid_3101"
    try {
      const user = await findUser(username);
      if(!user){
          res.status(404).send({
              message:"User not regestered"
          })
      }else{
          const isMatch = await bcrypt.compare(password,user.password)
          if(isMatch){
              const token = jwt.sign({userId:user.id,username:user.username,permissions:user.permission},secret,{expiresIn: '1d'})
              res.status(200).send({
                  token:token
              })
          }else{
              res.send({
                  message:"Password is incorrect"
              })
          }
      }
    }catch (e) {
        res.send(e)
    }
}

module.exports = {
    login
}