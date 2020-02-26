const express = require("express");
require("express-async-errors");

const { recupererLesUsers } = require("../controllers/users_controller");
const { OK } = require("../helpers/status_code");

const usersRouter = express.Router();

usersRouter.get("/", async (request, response) => {
  const users = await recupererLesUsers();
  response.status(OK);
  response.json(users);
});

module.exports = usersRouter;
