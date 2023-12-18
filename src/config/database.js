require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQL_DB,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: process.env.DIALECT,
    host: process.env.DB_HOST,
    operatorsAliases: false,
    pool: {
      max: parseInt(process.env.CONNECTION_LIMIT_MAX),
      min: parseInt(process.env.CONNECTION_LIMIT_MIN),
      acquire: parseInt(process.env.ACQUIRE),
      idle: parseInt(process.env.IDLE),
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("", err);
  });

module.exports = sequelize;
