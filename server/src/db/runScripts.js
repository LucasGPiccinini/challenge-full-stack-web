const conn = require('../db')
const {tableUsers} = require('./scripts/create_table_user.SQL')
const {tableStudents} = require('./scripts/create_table_students.SQL')
const { insertFirstAdmUser } = require('./scripts/insertFirstAdmUser.sql')


module.exports.execute = async() => {
    try {
        await conn.query(tableUsers)
        await conn.query(tableStudents)
        await conn.query(insertFirstAdmUser)
        return {
            messsage: 'Scripts successfully run!'
        }
    } catch (error) {
        throw error
    }
}