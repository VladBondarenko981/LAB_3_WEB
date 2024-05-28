const typeorm = require("typeorm");

const dataSource = new typeorm.DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Nikita123",
  database: "stup2",
  synchronize: true,
  entities: [require("../entity/User")],
});

module.exports = dataSource;
