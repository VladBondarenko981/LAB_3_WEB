const dataSource = require("../databaseConnection/database");

class UserService {
  async createUser(nickname, email, password, phone) {
    const userRepository = dataSource.getRepository("User");
    const newUser = await userRepository.create({
      nickname: nickname,
      email: email,
      password: password,
      phone: phone,
      userId: [],
      userName: [],
      userNumber: [],
      id: 1,
    });
    const savedUser = await userRepository.save(newUser);
    return savedUser;
  }

  async createUserNum(userId, userName, userNumber) {
    const userRepository = dataSource.getRepository("User");
    const id = 3;
    const user = await userRepository.findOneBy({ id });
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    user.userId.push(userId);
    user.userName.push(userName);
    user.userNumber.push(userNumber);
    await userRepository.save(user);
    return user;
  }

  async deleteUser(postIndex) {
    const userRepository = dataSource.getRepository("User");
    const id = 3; // Используем для примера, при регистрации меняется
    const user = await userRepository.findOneBy({ id });
    // Удаляем пост, описание и фото по найденным индексам
    user.userId.splice(postIndex, 1);
    user.userName.splice(postIndex, 1);
    user.userNumber.splice(postIndex, 1);
    await userRepository.save(user);

    return user;
  }
}

module.exports = new UserService();
