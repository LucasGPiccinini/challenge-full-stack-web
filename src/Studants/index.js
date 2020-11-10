'use strict'

const {createStudant} = require('./createStudant')
const {updateStudant} = require('./updateStudant')
const {deleteStudant} = require('./deleteStudant')

const actions = {
    insert: createStudant,
    update: updateStudant,
    delete: deleteStudant
}

module.exports = async (action, conn, data) =>{
    try {
        return await actions[action](conn, data)
    } catch (error) {
        throw error
    }
}