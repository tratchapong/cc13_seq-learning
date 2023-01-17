const express = require('express')
const userRoute = require('./routes/userRoute')
const todoRoute = require('./routes/todoRoute')
const authenticate = require('./middlewares/authenticate')

const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')

const app = express()

app.use(express.json())

app.use('/user', userRoute)
app.use('/todo',authenticate, todoRoute)

app.use(notFound)

app.use(errorMiddleware)

app.listen(8000, ()=> console.log('Server on 8000..'))
