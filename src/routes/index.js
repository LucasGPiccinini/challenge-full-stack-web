const { Router } = require('express')
const router = Router()
const conn = require('../../db')

const instances = {
    users: require('../Users')
}

router.post('/:subject/:action', async (req, res) =>{
    try {
        const teste = await instances[req.params.subject](req.params.action, conn, req.body)
        res.send({data:teste}) 
    } catch (error) {
        res.status(500).send({error:error.message})
    }
})

module.exports = router