module.exports = (sequelize, DataTypes) => {
  const project_image = sequelize.define("project_image", {
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image_path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return project_image;
};
