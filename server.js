const express = require("express")
const  app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const {getTaskList,getTaskListById,createTaskElement} = require("./controllers/controller");



app.get('/api/tasks',getTaskList)
//get Tasks by id
app.get('/api/tasks/:id',getTaskListById);
//create elem
app.post('/api/tasks',createTaskElement);

app.listen(8080,()=>{console.log("Server is running")})