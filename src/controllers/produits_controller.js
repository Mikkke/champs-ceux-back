const { Produits } = require("../models");

const produitsController = {
  recupererLesProduits: async () => {
    const produits = await Produits.findAll({
      order: [["nom", "ASC"]],
      attributes: ["id", "nom", "prix", "quantite", "description", "photo"],
      raw: true
    });
    return produits;
  }
};

module.exports = produitsController;
