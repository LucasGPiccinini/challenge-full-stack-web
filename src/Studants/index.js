'use strict'

const {createStudant} = require('./createStudant')

const actions = {
    insert: createStudant,
}

module.exports = async (action, conn, data) =>{
    try {
        return await actions[action](conn, data)
    } catch (error) {
        throw error
    }
}