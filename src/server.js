const express = require("express");

const route = require("./routes");
const server = express();

server.use("/api", route);

server.listen(8080, () => {
  console.log("server lancer");
});
