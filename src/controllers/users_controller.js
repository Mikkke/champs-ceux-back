const { Users } = require("../models");
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const token = require("../database/config/admin");

const usersController = {
  recupererLesUsers: async () => {
    const users = await Users.findAll({
      order: [["createdAt", "DESC"]],
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
    if (data.password === data.password_confirm) {
      /*      console.log("kkkklkkkkkkk");
      console.log(data);
      console.log("========="); */

      const nouveauUser = { id: uuid(), ...data };
      const userCree = await Users.create(nouveauUser);
      return userCree;
    } else {
      return console.log("les mots de passe ne correspondent pas");
    }
  }
};

module.exports = usersController;
