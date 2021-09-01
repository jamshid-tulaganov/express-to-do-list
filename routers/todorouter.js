const {Router} = require("express");
const router = Router();
const {getTaskList,getTaskListById,createTaskElement,updateTaskElement,deleteTaskElement} = require("../controllers/controller");
router.get("/",getTaskList);
router.get("/:Id",getTaskListById);
router.post("/",createTaskElement)
router.put("/:Id",updateTaskElement);
router.delete("/:Id",deleteTaskElement);

module.exports = {
    toDoRouter:router
}