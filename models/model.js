const data = require("../data.json");
const uuid = require("uuid");
const utils = require("../utils/utils");
const {writeFile} = require("../utils/utils");
function getTaskAll(){
    return new Promise((resolve,reject) =>{
       resolve(data);
    })
}

function getTaskById(id){
    return new Promise((resolve,reject) =>{
        let newTask = data.find((el) =>{
            return  el.id == id
        })
        resolve(newTask);
    })
}

function createTask(obj){
  return new Promise((resolve,reject) =>{
      const newObj2 = {
          id:uuid.v4(),
          ...obj
      }
      data.push(newObj2);
      utils.writeFile("data.json",data);
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
        writeFile("data.json",data);
        resolve(newObj);
    })
}
//delete element
function deleteTask(id){
    return new Promise((resolve,reject) =>{
       const deletedTasks = data.filter((el) =>{
           return  el.id !== id
        })
      utils.writeFile("data.json",deletedTasks);
       resolve(true);
    })
}

module.exports ={
    getTaskAll,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}