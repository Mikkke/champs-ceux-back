const { Users } = require("../models");

const usersController = {
  recupererLesUsers: async () => {
    const users = await Users.findAll({
      order: [["nom", "ASC"]],
      attributes: [
        "id",
        "nom",
        "prenom",
        "telephone",
        "email",
        "role",
        "adresse"
      ],
      raw: true
    });
    return users;
  }
};

module.exports = usersController;
