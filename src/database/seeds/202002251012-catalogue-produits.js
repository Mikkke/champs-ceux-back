const uuid = require("uuid");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),
    nom: "Pomme golden",
    prix: 4.5,
    quantite: 4,
    description:
      "de jolie pomme golden venu tout droit du verger de jean pierre",
    photo: "/api/photo/apple-3144294_1920.jpg",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "golden",
    prix: 4.5,
    quantite: 4,
    description:
      "de jolie pomme golden venu tout droit du verger de jean pierre",
    photo: "/api/photo/apple-3144294_1920.jpg",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Banane",
    prix: 4.5,
    quantite: 4,
    description:
      "de jolie pomme golden venu tout droit du verger de jean pierre",
    photo: "/api/photo/apple-3144294_1920.jpg",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Poire",
    prix: 4.5,
    quantite: 4,
    description:
      "de jolie pomme golden venu tout droit du verger de jean pierre",
    photo: "/api/photo/apple-3144294_1920.jpg",
    created_at: now,
    updated_at: now
  }
];
