const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");

router.post("/user", userController.createUser);
router.post("/createUser", userController.createUserNum);
router.post("/deleteUser", userController.deleteUser);

module.exports = router;
