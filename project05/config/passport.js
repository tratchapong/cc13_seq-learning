const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const { User } = require("../models");
const LocalStrategy = require('passport-local').Strategy


passport.use(new LocalStrategy({
  session: false,
}, async (username, password, cb) => {
  console.log('..... in Passport-LOCAL')
  const user = await User.findOne({ where: {username : username}})
  if(!user)
    return cb(null, false)
  if(password !== '1234')
    return cb(null, false)
  return cb(null, user)
}))

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
