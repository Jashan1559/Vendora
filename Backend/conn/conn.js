const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, 
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      connectTimeout: 20000, 
    },
  }
);

const conn = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connection to database successful");
  } catch (error) {
    console.error("❌ Error connecting to database:", error);
  }
};

conn();

module.exports = sequelize;
