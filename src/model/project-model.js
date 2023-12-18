module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define("project", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    short_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    long_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    link: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.INTEGER,
    },
  });

  return project;
};
