const passport = require("passport");
const connection = require("./db");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");

passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "pass",
        session: false,
      },
      (email, pass, cb) => {
        connection.query(
          "SELECT email, pass FROM users WHERE email=?",
          [email],
          (err, user) => {
            if (err) {
              return cb(err);
            }
            if (user.length === 0) {
              return cb(null, false, {
                message:
                  "email inconnu.",
              });
            }
  
            const hash = bcrypt.compareSync(pass, user[0].pass);
            if (hash) {
              return cb(null, user[0].email, {
                message: "utilisateur connecté",
              });
            } else {
              return cb(null, false, {
                message: "check ton password",
              });
            }
          }
        );
      }
    )
  );
  
  passport.use(
      new JWTStrategy(
        {
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: process.env.SECRET_KEY_JWT,
        },
        (jwtPayload, cb) => {
          return cb(null, jwtPayload);
        }
      )
    );