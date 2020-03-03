const { Users } = require("../models");
const uuid = require("uuid");

const usersController = {
  recupererLesUsers: async () => {
    const users = await Users.findAll({
      order: [["nom", "ASC"]],
      attributes: [
        "id",
        "nom",
        "prenom",
        "password",
        "telephone",
        "email",
        "adresse"
      ],
      raw: true
    });
    return users;
  },

  ajouterUnUsers: async data => {
    console.log("kkkklkkkkkkk");
    console.log(data);
    console.log("=========");
    const nouveauUser = { id: uuid(), ...data };
    const userCree = await Users.create(nouveauUser);
    return userCree;
  }
};

module.exports = usersController;
