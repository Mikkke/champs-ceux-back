const express = require("express");
require("express-async-errors");

const {
  recupererLesProduits,
  // recupererUnProduit,
  ajouterUnProduit
} = require("../controllers/produits_controller");

const { OK } = require("../helpers/status_code");

const produitsRouter = express.Router();

produitsRouter.get("/", async (request, response) => {
  const produits = await recupererLesProduits();

  response.status(OK);
  response.json(produits);
});

/* produitsRouter.get("/:id", async (request, response) => {
  const { id } = request.params;
  const produits = await recupererUnProduit(id);
  response.status(OK);
  response.json(produits);
}); */

produitsRouter.post("/", async (request, response) => {
  console.log("====================================");
  //console.log(data);
  //console.log("====================================");
  const data = request.body;
  const nouveauProduit = await ajouterUnProduit(data);

  console.log("====================================");
  console.log("pouet");
  console.log("====================================");

  response.status(OK);
  response.json(nouveauProduit);
});

module.exports = produitsRouter;
