const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {User} = require('../models')

exports.register =  (req,res,next) => {
    const {username, password, phone} = req.body

    // validation
    bcrypt.hash(password,10)
    .then( (hashed)=> {
     return  User.create({
                username : username,
                password : hashed,
                phone : phone
            })
    }).then( rs => {
        res.json(rs)
    }).catch(next)
}

exports.login = (req,res,next) => {
    const {username, password} = req.body
    User.findOne({ where : {username : username}})
    .then( user => {
        if(!user) {
            throw new Error('cannot login')
        }
        return user
    }).then( user => {
      return ({
        pw_ok : bcrypt.compare(password, user.password),
        user: user
      }) 
    }).then( ({pw_ok, user}) => {
        console.log(pw_ok)
        console.log(user)
        if(!pw_ok) {
            throw new Error('cannot login')
        }
        const payload = {
            id: user.id, 
            username : user.username
        }
        const token = jwt.sign(payload, 'TheSecret', { expiresIn : '30d'})
        res.json( {token : token,msg: 'Welcome ,' + username})
    }).catch(next)

}