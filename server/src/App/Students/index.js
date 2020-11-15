'use strict'

const {createStudent} = require('./createStudent')
const {updateStudent} = require('./updateStudent')
const {deleteStudent} = require('./deleteStudent')
const { loadAllStudents } = require('./loadAllStudents')
const { getStudent_register } = require('./getStudent_register')

const actions = {
    insert: createStudent,
    update: updateStudent,
    delete: deleteStudent,
    loadAll: loadAllStudents,
    getStudent_register: getStudent_register
}

module.exports = async (action, conn, data) =>{
    try {
        return await actions[action](conn, data)
    } catch (error) {
        throw error
    }
}