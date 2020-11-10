'use strict'

const {createStudent} = require('./createStudent')
const {updateStudent} = require('./updateStudent')
const {deleteStudent} = require('./deleteStudent')

const actions = {
    insert: createStudent,
    update: updateStudent,
    delete: deleteStudent
}

module.exports = async (action, conn, data) =>{
    try {
        return await actions[action](conn, data)
    } catch (error) {
        throw error
    }
}