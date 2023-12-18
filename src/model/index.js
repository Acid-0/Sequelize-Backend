const sequelize = require("../config/database.js");
require("dotenv").config();
const { Sequelize, DataTypes } = require(`sequelize`);
// const helperfunctions = require("../utility/helper/helper-functions");

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.contact = require("./contact-model.js")(sequelize, DataTypes);
database.project = require("./project-model.js")(sequelize, DataTypes);
database.project_image = require("./project-image-model.js")(
  sequelize,
  DataTypes
);
database.analytics = require("./analytics-model.js")(sequelize, DataTypes);

database.sequelize.sync({ force: false, alter: false }).then(() => {
  //   helperfunctions.writeConsole(`yes re-sync done`);
  console.log(`yes re-sync done`);
});

// FK of table category
// database.project.hasMany(database.project, {
//   foreignKey: "id",
//   as: "base",
// });

database.project_image.belongsTo(database.project, {
  foreignKey: "project_id",
  as: "project_id_FK_project",
});

// // FK of tavle product
// database.category.hasMany(database.category, {
//   foreignKey: "id",
//   as: "IdFKProduct",
// });

// database.product.belongsTo(database.product, {
//   foreignKey: "category_id",
//   as: "IdFKCategory",
// });

module.exports = database;
