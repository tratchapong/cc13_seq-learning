const express = require('express')
const userController = require('../controllers/userController')
const authenticate = require('../middlewares/authenticate')
const router = express.Router()

router.post('/register', userController.register )
router.post('/login', userController.login)
router.get('/private', authenticate, (req, res) => {
    res.json({msg: 'This is private zone'})
})

module.exports = router