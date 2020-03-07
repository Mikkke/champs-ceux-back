const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const verifyToken = require("./middlewares/verify_token");

const route = require("./routes");
const server = express();
//server.use(bodyParser.urlencoded({ extended: true }));
//
server.use(bodyParser.json());
server.use("/api/photo", express.static("src/assets"));
//server.use("/static", express.static(__dirname + "/public"));

//helmet
server.use("/api", cors());
server.use("/api", route);

server.use("api/auth", verifyToken);

server.get("/api/auth", async (req, res) => {
  const { uuid } = req.body;
  if (uuid) {
    res.json({ message: "OK", uuid });
  } else {
    res.json({ message: "NOPE" });
  }
});
//uploader les images

////////////
server.listen(8080, () => {
  console.log("server lancer");
});
