//requires
const express = require("express");
const morgan = require("morgan");

//code to create server
const server = express();

//middlewares
server.use(morgan("dev"));
server.use(express.json());

server.get("/", async (req, res) => {
  res.send("hola");
});

module.exports = server;
