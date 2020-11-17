'use strict'

const { createUser } = require('./createUser')
const { updateUser } = require('./updateUser')
const { deleteUser } = require('./deleteUser')
const { loadIsFirstLogin } = require('./loadIsFirstLogin')
const { savePassword } = require('./savePassword')

const actions = {
    insert: createUser,
    update: updateUser,
    delete: deleteUser,
    isfirstLogin: loadIsFirstLogin,
    savePassword: savePassword
}

module.exports = async (action, conn, data) =>{
    try {
        return await actions[action](conn, data)
    } catch (error) {
        throw error
    }
}