const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("je marche comme il faut");
  console.log("je marche");
});

app.listen(8080);
