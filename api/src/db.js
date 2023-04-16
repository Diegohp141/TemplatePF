require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const modelClient = require("./models/Client.js");
const modelProduct = require("./models/Product.js");

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/store`, {
  logging: false,
});

modelClient(sequelize);
modelProduct(sequelize);

const { Product, Client } = sequelize.models;

Product.belongsToMany(Client, { through: "Products/Clients" });
Client.belongsToMany(Product, { through: "Products/Clients" });

module.exports = {
  ...sequelize.models,
  db: sequelize,
};
