const express = require("express");
require("express-async-errors");

const {
  recupererLesUsers,
  ajouterUnUsers
} = require("../controllers/users_controller");
const { OK } = require("../helpers/status_code");

const usersRouter = express.Router();

usersRouter.get("/", async (request, response) => {
  const users = await recupererLesUsers();
  response.status(OK);
  response.json(users);
});

usersRouter.post("/", async (request, response) => {
  const data = request.body;
  const nouveauUser = await ajouterUnUsers(data);
  response.status(OK);
  response.json(nouveauUser);
});

module.exports = usersRouter;
