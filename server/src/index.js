const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extend:false}))
app.use(routes)

module.exports = (port) =>{
    app.listen(port)
} 

