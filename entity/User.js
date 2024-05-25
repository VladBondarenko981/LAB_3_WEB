const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "user",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    postId: {
      type: "int",
      array: true,
    },
    posts: {
      type: "varchar",
      array: true, // Массив постов
    },
    postDescriptions: {
      type: "varchar",
      array: true, // Массив описания постов
    },
    postPhotoUrls: {
      type: "varchar",
      array: true, // Массив URL фото постов
    },
    nickname: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
    phone: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
  },
});
