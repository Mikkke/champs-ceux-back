const express = require("express");
require("express-async-errors");

const { recupererLesProduits } = require("../controllers/produits_controller");

const { OK } = require("../helpers/status_code");

const produitsRouter = express.Router();

produitsRouter.get("/", async (request, response) => {
  const produits = await recupererLesProduits();

  response.status(OK);
  response.json(produits);
});

module.exports = produitsRouter;
