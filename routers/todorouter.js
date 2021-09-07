const {Router} = require("express");
const router = Router();
const {checkUser} = require("../middleware/authmiddleware");
const {checkAdmin} = require("../middleware/permission")
const {getTaskList,getTaskListById,createTaskElement,updateTaskElement,deleteTaskElement} = require("../controllers/todoController.js");
router.get("/",checkUser,getTaskList);
router.get("/:id",checkUser,getTaskListById);
router.post("/",checkUser,checkAdmin,createTaskElement)
router.put("/:Id",checkUser,checkAdmin,updateTaskElement);
router.delete("/:Id",checkUser,checkAdmin,deleteTaskElement);

module.exports = {
    toDoRouter:router
}