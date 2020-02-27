const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const route = require("./routes");
const server = express();
server.use(bodyParser.json());
server.use("/api", cors());
server.use("/api", route);

server.listen(8080, () => {
  console.log("server lancer");
});
