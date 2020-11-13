const { Router } = require('express')
const router = Router()
const conn = require('../db')
const login = require('../App/Login')

const instances = {
    users: require('../App/Users'),
    student: require('../App/Students'),
}

router.post('/:subject/:action', async (req, res) =>{
    try {
        res.send({data: await instances[req.params.subject](req.params.action, conn, req.body)}) 
    } catch (error) {
        res.status(500).send({error:error.message})
    }
})

router.get('/login/:action',  async (req, res) =>{
    try {
        const teste = await login(req.params.action, conn, req.headers)
        res.send({data:teste}) 
    } catch (error) {
        res.status(500).send({error:error.message})
    }
})

module.exports = router