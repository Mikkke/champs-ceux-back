const catalogueProduit = require("../seeds/202002251012-catalogue-produits");

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("produits", catalogueProduit);
  },
  down: queryInterface => {
    return queryInterface.bulkDelete("produits", null, {});
  }
};
