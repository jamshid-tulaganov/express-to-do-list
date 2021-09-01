const express = require("express")
const  app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());


const {getTaskList,getTaskListById,createTaskElement,updateTaskElement,deleteTaskElement} = require("./controllers/controller");



app.get('/api/tasks',getTaskList)
//get Tasks by id
app.get('/api/tasks/:id',getTaskListById);
//create elem
app.post("/api/tasks",createTaskElement);
//update element
app.put("/api/tasks/:Id",updateTaskElement);
//delete element
app.delete("/api/tasks/:Id",deleteTaskElement);
app.listen(8080,()=>{console.log("Server is running")})