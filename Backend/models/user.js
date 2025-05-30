const { DataTypes } = require("sequelize");
const sequelize = require("../conn/conn");

const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM("user", "admin"), defaultValue: "user" },
}, { timestamps: true });

User.associate = (models) => {
    User.hasMany(models.Cart, { foreignKey: "userId" });
};

module.exports = User;
