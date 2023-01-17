const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const { User } = require("../models");

let options = {
  secretOrKey: "TheSecret",
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
  new JwtStrategy(options, (payload, done) => {
    User.findOne({ where: { id: payload.id } })
      .then((user) => {
        if (!user) {
          return done(new Error("user not Found"), false);
        }
        done(null, user); //req.user = user
      })
      .catch((err) => {
        done(err, false);
      });
  })
);
