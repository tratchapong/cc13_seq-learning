const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    res.json({msg: 'TodoList for ' + req.user.username})
})

module.exports=router

