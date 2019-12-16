const express = require("express");

const apiRouter = require("./api-router.js");
const cfgMiddle = require("./configure-middleware.js");

const server = express();

cfgMiddle(server);

server.use("/api", apiRouter);

module.exports = server;