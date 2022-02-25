/* eslint-disable import/extensions */
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.records = require("./records.js")(sequelize, Sequelize);

module.exports = db;
