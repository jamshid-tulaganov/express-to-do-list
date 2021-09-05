const user = require("../models/userModel");
const {use} = require("express/lib/router");
//get all users
async function getAllUserController(req,res){
    try {
      const result = await user.getAllUser();
      res.status(200).send(result);
    }catch (e) {
        res.status(404).send(e);
    }
};
//
async function getUserById(req,res){
    const {id} = req.params;
    try {
      const result = await user.getUserId(id);
      if(result){
          res.send(result);
      }else {
        res.status(404).send({
            message:"user not found"
        })
      }
    }catch (e) {
        res.status(404).send(e);
    }
}
//
async function createUserByController(req,res){
    try {
       const result = await user.createUser(req);
       if(result){
           res.send("created user")
       }else{
           res.send("oooo no")
       }
    }catch (e) {
        res.send(e);
    }
}
//
async function updateUserByContr(req,res){
    const {id} = req.params;
    const {fullName,age,username,password} = req.body;
    try {
       const result =  await user.getUserId(id);
       console.log(result)
       if(!result){
           res.send("user not found");
       }else{
           const updatedUser = {
               fullName:fullName || result.fullName,
               age:age || result.age,
               username:username || result.username,
               password:password || result.password
           }
          const result2 = await user.updateUser(id,updatedUser);
           res.send(result2);

    }
    }catch (e) {
        res.send(e);
    }
}
//
async function deleteUserByContr(req,res){
   const {id} = req.params;
   try {
     const result = await user.deleteUser(id);
     if(!result){
         res.status(404).send("error aka");
     }else{
         res.send("delete succesfully")
     }
   }catch (e) {
       res.send(e);
   }
};

module.exports = {
    getAllUserController,
    getUserById,
    createUserByController,
    updateUserByContr,
    deleteUserByContr
}