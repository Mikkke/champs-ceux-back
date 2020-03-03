const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const route = require("./routes");
const server = express();
//server.use(bodyParser.urlencoded({ extended: true }));
//
server.use(bodyParser.json());
server.use("/api/photo", express.static("src/assets"));
//server.use("/static", express.static(__dirname + "/public"));

server.use("/api", cors());
server.use("/api", route);
//uploader les images

////////////
server.listen(8080, () => {
  console.log("server lancer");
});
