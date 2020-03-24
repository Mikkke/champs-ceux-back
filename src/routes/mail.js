const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

router.use((req, res, next) => next());
router.use(bodyParser.json());

router.post("/send-message", (req, res) => {
  const data = req.body;
  const { name, mail, people, message } = data;
  /* console.log("req.data :", req.body); */
  console.log("data :", data);

  if (name && mail && people && message) {
    nodemailer
      .createTransport({
        service: "Gmail",
        auth: {
          user: process.env.MAIL_ACCOUNT,
          pass: process.env.MAIL_PASSWORD
        }
      })
      .sendMail(
        {
          from: "nodemail503@gmail.com",
          to: "nodemail503@gmail.com",
          message,
          people,
          html: `
      <p>Nom : ${name}</p>
      <p>Email : ${mail}</p>
      <p>Personne : ${people}</p>
      <p>Message :</p>
      <br>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `
        },
        error => {
          if (error) {
            throw error;
          } else {
            res.sendStatus(200);
          }
        }
      );
  } else {
    res.sendStatus(200);
  }
});

module.exports = router;
