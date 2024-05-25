const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");

router.post("/user", userController.createUser);
router.post("/createPost", userController.createPost);
router.post("/deletePost", userController.deletePost);
// router.delete("/user", userController.deleteUser)
// router.put("/user", userController.updateUser)
// router.put("/user/up", userController.upUser)
// router.put("/user/down", userController.backUser)

module.exports = router;
