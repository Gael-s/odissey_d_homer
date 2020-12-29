const router = require("express").Router();
const passport = require("passport");
const connection = require("../../helpers/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("../../helpers/strategy");

router.post("/signup", function (req, res) {
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    pass: req.body.pass,
  };
  const hash = bcrypt.hashSync(user.pass, 10);

  connection.query(
    'INSERT INTO users (firstname, lastname, email, pass) VALUES (?, ?, ?, ?)',
        [ user.firstname, user.lastname, user.email, hash ],
    (error, result) => {
      if (error) res.status(500).json({ flash: error.message });
      else res.status(200).json({ flash: "Utilisateur ajouté !" });
    }
  );
});

router.post('/signin', function (req, res) {
  passport.authenticate('local',(err, user, info) => {
    if(err) return res.status(500).send(err.message)
    if (!user) return res.status(400).json({message: info.message});
    const token = jwt.sign({ user }, process.env.SECRET_KEY_JWT);
    return res.json({user, token});
  })(req, res)
});

module.exports = router;
