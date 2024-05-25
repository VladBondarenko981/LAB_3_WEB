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

  async createPost(req, res) {
    const { postName, post, postPhoto, id } = req.body;
    const user = await userService.createPost(postName, post, postPhoto, id);
    return res.json(user);
  }

  async deletePost(req, res) {
    const { id } = req.body;
    const user = await userService.deletePost(id);
    return res.json(user);
  }
  // async getUser(req, res){
  //     const users = await userService.getUser()
  //     return res.json(users)
  // }
  //  async updateUser(req, res){
  //      const {id, task} = req.body;
  //      const updatedUsers = await userService.updateUser(id, task)
  //      return res.json(updatedUsers)
  //  }
  // async deleteUser(req, res){
  //     const {id} = req.body;
  //     const usersWithoutOne = await userService.deleteUser(id)
  //     return res.json(usersWithoutOne)
  // }
  // async upUser(req, res){
  //     const {id} = req.body;
  //      const upUsers = await userService.upUser(id)
  //      return res.json(upUsers)
  // }
  // async backUser(req, res){
  //     const {id} = req.body;
  //      const backUsers = await userService.backUser(id)
  //      return res.json(backUsers)
  // }
}

module.exports = new UserController();
