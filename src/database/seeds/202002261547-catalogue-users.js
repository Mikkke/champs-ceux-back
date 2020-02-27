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
    telephone: "2083780083",
    email: "jean@pphillipe.com",
    adresse: "123 rue de la genteli 25788 province",
    created_at: now,
    updated_at: now
  }
];
