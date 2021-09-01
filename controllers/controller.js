const Tasks = require("../models/model");

async function getTaskList(req,res){
    try {
        const result = await Tasks.getTaskAll() ;
        res.send(result);
    }catch (e) {
        res.status(404).send(e);
    }
}
// get Task By Id
async function getTaskListById(req,res){
  let {id} = req.params;
  try{
      let result = await Tasks.getTaskById(id);
      if(!result){
          res.status(404).send("Product isnot exist")
      }else {
          res.send(result);
      }
  }catch (e) {
      res.send(e);
  }

}
//create elem in js
async function createTaskElement(req,res){
 const {title,description,status,createdAt,priority}  = req.body;
 const newTask = {
     title,
     description,
     status,
     createdAt,
     priority
 }
 try {
    const result = await Tasks.createTask(newTask);
     res.send(result);
 }catch (e) {
     res.send(e)
 }
}
// update element
async function updateTaskElement(req,res){
    const {Id} = req.params;
    const {title,description,status,createdAt,priority}  = req.body;
    try {
       const oldTask = await Tasks.getTaskById(Id);
       if(!oldTask){
           res.send({
               message:"Task not found"
           })
       }else {
          const newTask = {
              title:title || oldTask.title,
              description:description || oldTask.description,
              status:status || oldTask.status,
              createdAt:createdAt || oldTask.createdAt,
              priority:priority || oldTask.priority
          }
         const newELem = await Tasks.updateTask(Id,newTask);
          res.send(newELem)
       }
    }catch (e) {
        res.send(e);
    }
}
//delete element
async function deleteTaskElement(req,res){
    const {Id} = req.params;
    try {
       const result = await Tasks.deleteTask(Id);
       if(result){
           res.send({
               message:"task deleted succesfully"
           })
       }else{
           res.send({
             message:"Error"
           })
       }


    }catch (e) {
        res.send(e)
    }

}
module.exports = {
    getTaskList,
    getTaskListById,
    createTaskElement,
    updateTaskElement,
    deleteTaskElement
}