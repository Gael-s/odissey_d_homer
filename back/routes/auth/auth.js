const router = require("express").Router();
const connection = require("../../helpers/db");

router.post("/signup", function (req, res, next) {
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    pass: req.body.pass,
  };

  connection.query(
    "INSERT INTO users ( firstname, lastname, email, pass) VALUES (?,?,?,?)",
    [user.firstname, user.lastname, user.email, user.pass],
    (errTwo, resTwo) => {
      if (errTwo) res.status(500).json({ flash: errTwo.message });
      else res.status(200).json({ flash: "User has been signed up !" });
    }
  );
});

module.exports = router;
