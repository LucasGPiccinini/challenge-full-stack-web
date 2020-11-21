const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const {execute} = require('./db/runScripts')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extend:false}))
app.use(routes)

module.exports = async(port) =>{
    await execute()
    app.listen(port)
} 

