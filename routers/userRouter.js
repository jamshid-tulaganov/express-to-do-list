const {Router} = require("express");
const router = Router();
const {getAllUserController,getUserById,createUserByController,updateUserByContr,deleteUserByContr} = require("../controllers/userController")

router.get("/",getAllUserController);
router.get("/:id",getUserById);
router.post("/",createUserByController);
router.put("/:id",updateUserByContr);
router.delete("/:id",deleteUserByContr)

module.exports = {
    userRouting:router
}