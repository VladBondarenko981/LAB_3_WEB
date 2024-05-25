const dataSource = require("../databaseConnection/database");

class UserService {
  async createUser(nickname, email, password, phone) {
    const userRepository = dataSource.getRepository("User");
    const newUser = await userRepository.create({
      nickname: nickname,
      email: email,
      password: password,
      phone: phone,
      posts: [],
      postId: [],
      postDescriptions: [],
      postPhotoUrls: [],
      id: Math.floor(Math.random() * 10000),
    });
    const savedUser = await userRepository.save(newUser);
    return savedUser;
  }

  async createPost(postName, post, postPhoto, id) {
    const userRepository = dataSource.getRepository("User");
    const user = await userRepository.findOneBy({ id });
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    const randomNum = Math.floor(Math.random() * 1000000);
    user.postId.push(randomNum);
    user.posts.push(postName);
    user.postDescriptions.push(post);
    user.postPhotoUrls.push(postPhoto);
    await userRepository.save(user);
    return user;
  }

  async deletePost(postIndex) {
    console.log(99);
    const userRepository = dataSource.getRepository("User");
    const id = 6; // Используем для примера, при регистрации меняется
    const user = await userRepository.findOneBy({ id });
    // Удаляем пост, описание и фото по найденным индексам
    user.postId.splice(postIndex, 1);
    user.posts.splice(postIndex, 1);
    user.postDescriptions.splice(postIndex, 1);
    user.postPhotoUrls.splice(postIndex, 1);

    await userRepository.save(user);

    return user;
  }

  //     async getUser() {
  //         const userRepository = dataSource.getRepository("User");
  //         const dataUsers = await userRepository.find();
  //         const users = dataUsers.sort((a, b) => a.count - b.count);
  //         const newArray = [];
  //         function newSet(users){
  //           for(let i = 0; i < users.length; i++){
  //             if(users[i].parentId == null){
  //               newArray.push(users[i])
  //             }else{
  //               const len = newArray.length;
  //               for(let j = 0; j < len; j++){
  //                 if(newArray[j].id === users[i].parentId){
  //                   for(let l = newArray.length; l > j+1; l--){
  //                     newArray[l] = newArray[l-1]
  //                   }
  //                   newArray[j+1] = users[i]
  //                 }
  //               }
  //             }
  //           }
  //         }
  //         newSet(users)
  //         return newArray;
  //   }

  //      async updateUser(id, task, subtasks) {
  //          const userRepository = dataSource.getRepository("User");
  //          const user = await userRepository.findOneBy({id});
  //          user.task = task;
  //          user.subtasks = subtasks;
  //          await userRepository.save(user)
  //          const users = await userRepository.find();
  //          return users;
  //    }

  //     async deleteUser(id){
  //         const userRepository = dataSource.getRepository("User");
  //         const needUser = await userRepository.findOneBy({id});
  //         await userRepository.remove(needUser);
  //         const newRepTwo = await userRepository.find();
  //         return (newRepTwo)
  //     }

  //     async upUser(id) {
  //       const userRepository = dataSource.getRepository("User");
  //       const users = await userRepository.find();
  //       const user = await userRepository.findOneBy({id});
  //       let a = -1;
  //       for(let i = 0; i < users.length; i++){
  //         if(users[i].id == user.id){
  //           a = i
  //         }
  //       }
  //       const minCountUser = users.reduce((minUser, currentUser) => {
  //         return currentUser.count < minUser.count ? currentUser : minUser;
  //       }, users[0]);
  //       if (users[a].count === minCountUser.count) {
  //         let max = -999;
  //         for(let i = 0; i < users.length; i++){
  //           if(users[i].count > max){
  //             max = users[i].count
  //           }
  //         }
  //         users[a].count = max + 1
  //       }else{
  //          for(let j = 0; j < users.length; j++){
  //            if(users[j].count + 1 == users[a].count){
  //              users[j].count++;
  //            }
  //          }
  //         users[a].count = users[a].count - 1;

  //       }
  //       await userRepository.save(users)
  //       return users;
  // }

  //   async backUser(id) {
  //     const userRepository = dataSource.getRepository("User");
  //       const users = await userRepository.find();
  //       const user = await userRepository.findOneBy({id});
  //       let a = -1;
  //       for(let i = 0; i < users.length; i++){
  //         if(users[i].id == user.id){
  //           a = i
  //         }
  //       }
  //       const maxCountUser = users.reduce((maxUser, currentUser) => {
  //         return currentUser.count > maxUser.count ? currentUser : maxUser;
  //       }, users[0]);
  //       if (users[a].count === maxCountUser.count) {
  //         let min = 999;
  //         for(let i = 0; i < users.length; i++){
  //           if(users[i].count < min){
  //             min = users[i].count
  //           }
  //         }
  //         users[a].count = min - 1
  //       }else{
  //          for(let j = 0; j < users.length; j++){
  //            if(users[j].count - 1 == users[a].count){
  //              users[j].count--;
  //            }
  //          }
  //         users[a].count = users[a].count + 1;

  //       }
  //       await userRepository.save(users)
  //       return users;
  //   }
}

module.exports = new UserService();
