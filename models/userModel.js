const users = require("../data/dataUser.json");
const {v4:uuid} = require("uuid");
const util = require("../utils/utils");

// get all model users
function getAllUser(){
    return new Promise((resolve,reject) =>{
        resolve(users);
    })
}
//get user with id;
function getUserId(id){
    return new Promise((resolve,reject) =>{
        const user = users.find((user)=>{
            return user.id == id
        })
        resolve(user);
    })
}
//create user
function createUser(obj){
    return new Promise((resolve,reject) =>{
        const newObj2 = {
            id:uuid(),
            ...obj
        }
        users.push(newObj2);
        util.writeFile("./data/dataUser.json",users)
        resolve(newObj2);
    })
}

//update user
function updateUser(id,newObj){
    return new Promise((resolve,reject) =>{

        const index = users.findIndex((user) =>{
           return  user.id === id
        })
       const updatedUser = {
            id,
           ...newObj
       }
        users[index] = updatedUser;
        util.writeFile("./data/dataUser.json",users);
        resolve(updatedUser);
    })
}
//delete user
function deleteUser(id){
    return new Promise((resolve,reject) =>{
        const resultUser = users.filter((user) =>{
            return user.id !==id
        })
        util.writeFile("./data/dataUser.json",resultUser);
        resolve(true);
    })
}
module.exports = {
    getAllUser,
    getUserId,
    createUser,
    updateUser,
    deleteUser
}