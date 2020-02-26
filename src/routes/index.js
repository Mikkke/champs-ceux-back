const express = require("express");

const produitsRouter = require("./produits_router");

const mainRouter = express.Router();

mainRouter.use("/produits", produitsRouter);

module.exports = mainRouter;
