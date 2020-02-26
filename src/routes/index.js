const express = require("express");

const produitsRouter = require("./produits_router");
const usersRouter = require("../routes/users_router");

const mainRouter = express.Router();

mainRouter.use("/produits", produitsRouter);
mainRouter.use("/users", usersRouter);

module.exports = mainRouter;
