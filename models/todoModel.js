const data = require("../data/dataToDoList.json");
const uuid = require("uuid");
const utils = require("../utils/utils");

function getTaskAll(){
    return new Promise((resolve,reject) =>{
       resolve(data);
    })
}

function getTaskById(id){
    return new Promise((resolve,reject) =>{
        const taskById = data.find((el) =>{
           return  el.id === id
        })
        resolve(taskById);
    })
}

function createTask(obj){
  return new Promise((resolve,reject) =>{
      const newObj2 = {
          id:uuid.v4(),
          ...obj
      }
      data.push(newObj2);
      utils.writeFile("./data/dataToDoList.json",data);
      resolve(newObj2)
  })

}
//updated element
function updateTask(id,newObj){
    return new Promise((resolve,reject) =>{
        const  index = data.findIndex((el) =>{
           return  el.id === id
        })
        data[index] = {id,...newObj};
        utils.writeFile("./data/dataToDoList.json",data);
        resolve(newObj);
    })
}
//delete element
function deleteTask(id){
    return new Promise((resolve,reject) =>{
       const deletedTasks = data.filter((el) =>{
           return  el.id !== id
        })
        utils.writeFile("./data/dataToDoList.json",deletedTasks);
       resolve(true);
    })
}


module.exports ={
    getTaskAll,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
}