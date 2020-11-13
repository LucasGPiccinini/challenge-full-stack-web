'use strict'

const { loadUserByToken } = require("../Users/loadUserByToken")
const conn = require('../../db')
const { extrectToken } = require("../util/extractors")
const config = require('config')

const isIgnoredURI = (URI) => config.get('ignoredURIs').filter((uri)=> uri === URI).length

module.exports.validateTokenHandler = async (req, res, next) => {

    try {
        if (!isIgnoredURI(req.url)) await loadUserByToken(conn, extrectToken(req.headers.authorization))
        next()
    } catch (error) {
        res.status(401)
        res.send({error:error.message})
    }

}