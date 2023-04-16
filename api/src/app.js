//requires
const express = require("express");
const morgan = require("morgan");
const clients = require("./routes/clientsRoutes.js");
const products = require("./routes/productsRoutes.js");

//code to create server
const server = express();

//middlewares
server.use(morgan("dev"));
server.use(express.json());
server.use("/clients", clients);
server.use("/products", products);

server.get("/", async (req, res) => {
  res.send({ name: "hola" });
});

module.exports = server;
