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
    userId: {
      type: "varchar",
      array: true,
    },
    userName: {
      type: "varchar",
      array: true, // Массив постов
    },
    userNumber: {
      type: "varchar",
      array: true, // Массив описания постов
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
