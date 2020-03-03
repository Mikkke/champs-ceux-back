const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),
    nom: "Jean",
    prenom: "Phillipe",
    password: "ugkloiehhjhfhhf",
    telephone: "2083780083",
    email: "jean@pphillipe.com",
    adresse: "123 rue de la genteli 25788 province",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "yoo",
    prenom: "moma",
    password: "ugkloiehhjhfhhf",
    telephone: "2083780083",
    email: "jean@pphillipe.com",
    adresse: "123 rue de la genteli 25788 province",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "durand",
    prenom: "lescours",
    password: "ugkloiehhjhfhhf",
    telephone: "2083780083",
    email: "jean@pphillipe.com",
    adresse: "123 rue de la genteli 25788 province",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "fino",
    prenom: "louis",
    password: "ugkloiehhjhfhhf",
    telephone: "2083780083",
    email: "jean@pphillipe.com",
    adresse: "123 rue de la genteli 25788 province",
    created_at: now,
    updated_at: now
  }
];
