const jwt = require('jsonwebtoken')
const {User} = require('../models')

module.exports = (req, res, next) => {
    const authorization = req.headers.authorization
    if(!authorization || !authorization.startsWith('Bearer')) {
        return res.status(401).json({msg: 'Unauthorized 1'})
    }
    const token = authorization.split(' ')[1]
    if(!token){
        return res.status(401).json({msg: 'Unauthorized 2'})
    }
    const payload = jwt.verify(token, 'TheSecret')

    User.findOne({
        where : { id : payload.id}
    }).then(user => {
        if(!user) {
          res.status(401).json({msg: 'Unauthorized 3'})
        }
        req.user = user
        next()
    }).catch(next)
}

