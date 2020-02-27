const pick = require("lodash/pick");
const { Produits } = require("../models");
const uuid = require("uuid/v4");

const produitsController = {
  recupererLesProduits: async () => {
    const produits = await Produits.findAll({
      order: [["nom", "ASC"]],
      attributes: ["id", "nom", "prix", "quantite", "description", "photo"],
      raw: true
    });
    return produits;
  },

  recupererUnProduit: async id => {
    const produit = await Produits.findByPK(id, {
      attributes: ["nom", "prix", "quantité", "photo", "description"],
      raw: true
    });

    return produit;
  },

  ajouterUnProduit: async data => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    const nouveauProduit = { id: uuid(), ...data };
    const produitCree = await Produits.create(nouveauProduit);
    return produitCree;
  }
};

module.exports = produitsController;
