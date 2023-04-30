const passport = require('passport')

exports.authenJWT = passport.authenticate('jwt', {session: false})

exports.authenLocal = passport.authenticate('local', {session: false})
