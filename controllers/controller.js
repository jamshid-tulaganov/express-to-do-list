const Tasks = require("../models/model");
const Utils = require("../utils/utils")

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
  let result = await Tasks.getTaskById(id);
  if(!result){
      res.status(404).send("Product isnot exist")
  }else {
      res.send(result);
  }
}

async function createTaskElement(req,res){
    try{
       const result = await Tasks.createTask(req,res)
        console.log(result);
        Utils.writeFile('../data.json',result);
       res.send("data is written")

    }catch (e) {
        res.status(404).send({
            message:"Product not found"
        })

    }
}

module.exports = {
    getTaskList,
    getTaskListById,
    createTaskElement
}