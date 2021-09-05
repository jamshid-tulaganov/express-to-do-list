const express = require("express")
const  app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const {toDoRouter} = require("./routers/todorouter");
const {userRouting} = require("./routers/userRouter");
app.use("/api/tasks",toDoRouter);
app.use("/api/user",userRouting);
app.listen(8080,()=>{console.log("Server is running")})