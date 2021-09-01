const express = require("express")
const  app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const {toDoRouter} = require("./routers/todorouter");

app.use("/api/tasks",toDoRouter);
app.listen(8080,()=>{console.log("Server is running")})