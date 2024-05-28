const userService = require("../services/userService");

class UserController {
  async createUser(req, res) {
    const { nickname, email, password, phone } = req.body;
    const newUser = await userService.createUser(
      nickname,
      email,
      password,
      phone
    );
    return res.json(newUser);
  }

  async createUserNum(req, res) {
    const { userId, userName, userNumber } = req.body;
    const user = await userService.createUserNum(userId, userName, userNumber);
    return res.json(user);
  }

  async deleteUser(req, res) {
    const { id } = req.body;
    const user = await userService.deleteUser(id);
    return res.json(user);
  }
}

module.exports = new UserController();
