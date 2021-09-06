const {Router} = require("express");
const router = Router();
const {getTaskList,getTaskListById,createTaskElement,updateTaskElement,deleteTaskElement,changeStatusElement} = require("../controllers/todoController.js");
router.get("/",getTaskList);
router.get("/:id",getTaskListById);
router.post("/",createTaskElement)
router.put("/:Id",updateTaskElement);
router.delete("/:Id",deleteTaskElement);

module.exports = {
    toDoRouter:router
}