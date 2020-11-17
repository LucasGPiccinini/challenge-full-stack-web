const { Router } = require('express')
const router = Router()
const conn = require('../db')
const login = require('../App/Login')
const { validateTokenHandler } = require('../App/hendlers/validateTokenHandler')

const instances = {
    user: require('../App/Users'),
    student: require('../App/Students'),
}

router.get('/login/:action',  async (req, res) =>{
    try {
       res.send(await login(req.params.action, conn, req.headers))
    } catch (error) {
        res.status(401).send({error:error.message})
    }
})

router.post('/:subject/:action', validateTokenHandler, async (req, res) =>{
    try {
        res.send({data: await instances[req.params.subject](req.params.action, conn, req.body)}) 
    } catch (error) {
        res.status(500).send({error:error.message})
    }
})


module.exports = router