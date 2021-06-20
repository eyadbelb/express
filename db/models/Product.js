module.exports = (sequelize, DataTypes) =>
  sequelize.define("Product", {
    name: { type: DataTypes.STRING, allowNull: false },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
      validate: { min: 3, max: 20 },
    },
    description: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
  });
