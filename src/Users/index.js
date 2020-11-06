'use strict'

const {createUser} = require('./createUser')
const {updateUser} = require('./updateUser')
const {deleteUser} = require('./deleteUser')

const actions = {
    insert: createUser,
    update: updateUser,
    delete: deleteUser
}

module.exports = async (action, conn, data) =>{
    try {
        return await actions[action](conn, data)
    } catch (error) {
        throw error
    }
}