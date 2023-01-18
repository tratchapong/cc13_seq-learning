const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {User} = require('../models')

exports.register =  (req,res,next) => {
    const {username, password, phone} = req.body

    // Please add validation zone here

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
    let userOK = {}
    User.findOne({ where : {username : username}})
    .then( user => {
        if (!user)
            throw new Error('401::Cannot Login 1')
        return    userOK = user
    }).then( () => {
        return bcrypt.compare(password, userOK.password)
    }).then( (pw_ok) => {
        if(!pw_ok) 
            throw new Error('401::Cannot Login 2')
        const payload = {
            id: userOK.id, 
            username : userOK.username
        }
        const token = jwt.sign(payload, 'TheSecret', { expiresIn : '30d'})
        res.json( {token : token,msg: 'Welcome ,' + username})
    }).catch(next)

}