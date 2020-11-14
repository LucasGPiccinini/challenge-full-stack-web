'use strict'

const {createStudent} = require('./createStudent')
const {updateStudent} = require('./updateStudent')
const {deleteStudent} = require('./deleteStudent')
const { loadAllstudents } = require('./loadAllstudents')

const actions = {
    insert: createStudent,
    update: updateStudent,
    delete: deleteStudent,
    loadAll: loadAllstudents
}

module.exports = async (action, conn, data) =>{
    try {
        return await actions[action](conn, data)
    } catch (error) {
        throw error
    }
}