module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define("contact", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_name: {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
    },
    comment: {
      type: DataTypes.STRING,
    },
    contact_back: {
      type: DataTypes.INTEGER,
    },
  });

  return contact;
};
