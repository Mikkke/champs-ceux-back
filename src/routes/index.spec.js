const { expect } = require("chai");

const sinon = require("sinon");
const uuid = require("uuid/v4");

const request = require("supertest");
const app = require("../server");
const { Produits } = require("../models/");

describe("POST /roles", () => {
  afterEach(done => {
    // Produits.truncate();
    done();
  });

  const data = {
    nom: "10/27/2016",
    prix: 'Apple MacBook Pro 13-Inch "Core i5" 2.0',
    quantite: "MLL42LL/A",
    photo: "A1708 (EMC 2978)",
    description: "gghjjhjgh"
  };

  it("should return a new product object", done => {
    request(app)
      .post("/api/produits")
      .send(data)
      .set("Accept", "application/json")
      .expect(201, done);
  });
});
