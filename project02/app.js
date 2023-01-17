const express = require('express')
const productRoute = require('./routes/producRoute')
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')

const app = express()

app.use(express.json())


app.use('/product', productRoute)

app.use(notFound)

app.use(errorMiddleware)

app.listen(8000, ()=> console.log('Server on 8000..'))
