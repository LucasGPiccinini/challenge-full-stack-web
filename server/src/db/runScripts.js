const conn = require('../db')
const {tableUsers} = require('./scripts/create_table_user.SQL')
const {tableStudents} = require('./scripts/create_table_students.SQL')


module.exports.execute = async() => {
    try {
        await conn.query(tableUsers)
        await conn.query(tableStudents)
        return {
            messsage: 'Tables created successfully!'
        }
    } catch (error) {
        throw error
    }
}