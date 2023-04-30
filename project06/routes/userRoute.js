const express = require('express')
const userController = require('../controllers/userController')
// const authenticate = require('../middlewares/authenticate')
const {authenJWT, authenLocal} =require('../middlewares/passportAuthen')
const router = express.Router()

router.post('/register', userController.register )
// router.post('/login', userController.login)
router.post('/login', authenLocal, userController.pplogin)
router.get('/private', authenJWT, (req, res) => {
    res.json({msg: 'This is private zone for ' + req.user.username})
})

module.exports = router