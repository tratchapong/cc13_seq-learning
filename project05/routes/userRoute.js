const express = require('express')
const passport = require('passport')
const userController = require('../controllers/userController')
// const authenticate = require('../middlewares/authenticate')
const passportAuthen =require('../middlewares/passportAuthen')
const router = express.Router()

router.post('/register', userController.register )
// router.post('/login', userController.login)
router.post('/login', passport.authenticate('local', {session: false}), userController.pplogin)
router.get('/private', passportAuthen, (req, res) => {
    res.json({msg: 'This is private zone for ' + req.user.username})
})

module.exports = router