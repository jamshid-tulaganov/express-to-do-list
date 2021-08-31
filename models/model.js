const data = require("../data.json");
const {uuid} = require("uuid");
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

function createTask(req,res){
      const {title,description,status,createdAt,priority} = req.body;
      let newObj = {
          id:uuid.v4(),
          title,
          description,
          status,
          createdAt,
          priority
      }
      data.push(newObj);
      return data;
}

module.exports ={
    getTaskAll,
    getTaskById,
    createTask
}