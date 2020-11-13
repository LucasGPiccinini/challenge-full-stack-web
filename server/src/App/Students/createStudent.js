
'use strict'

const { createUser } = require('../Users/createUser')
const { loadUser } = require('../Users/loadUser')
const { loadStudentByUserId } = require('./loadStudentByUserId')


const sql = `
INSERT INTO students_grupoa 
        (id_user,
         student_register) 
        VALUES ($1, 
                $2)
RETURNING *        
`
module.exports.createStudent = async(conn, data) => {
    try {
        let user = await loadUser(conn, data)
        if (!user.data.id) user = await createUser(conn, data)
        let student = await loadStudentByUserId(conn, {id_user: user.data.id})
        if(student.data.id) throw new Error(`Estudante ${data.name ? (data.name + ' ') : ''}já cadastrado`)
        else student = await conn.query(sql, [user.data.id, data.studentRegister])
        return {
            message: ` Estudante ${data.name ? (data.name + ' ') : ''}criado com sucesso! `,
            data: student.rows[0]
        }
    } catch (error) {
        throw error
    }
}