module.exports = (sequelize, DataTypes) => {
  const analytics = sequelize.define("analytics", {
    years: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    solutions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    experts: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    projects: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return analytics;
};
