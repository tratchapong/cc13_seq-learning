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

exports.pplogin = (req,res,next) => {
    const {user : {id, username}} = req
    console.log(JSON.stringify(req.user, null, 2))
    const payload = {
        id: id, 
        username : username
    }
    const token = jwt.sign(payload, 'TheSecret', { expiresIn : '30d'})
    res.json( {token : token,msg: 'Welcome ,' + username})

}

exports.login = (req,res,next) => {
    const {username, password} = req.body
    User.findOne({ where : {username : username}})
    .then( user => {
        if (!user)
            throw new Error('401::Cannot Login 1')
        return Promise.all([
            bcrypt.compare(password, user.password),
            Promise.resolve(user)])
    })
    .then( ([pw_ok, user]) => {
        if(!pw_ok) 
            throw new Error('401::Cannot Login 2')
        const payload = {
            id: user.id, 
            username : user.username
        }
        const token = jwt.sign(payload, 'TheSecret', { expiresIn : '30d'})
        res.json( {token : token,msg: 'Welcome ,' + username})
    }).catch(next)

}