'use strict'

const { updateUser } = require("../Users/updateUser")

const sql = `
UPDATE STUDENTS_GRUPOA
   SET first_login = $1
 WHERE id = $2
 RETURNING *
`
module.exports.updateStudent = async (conn, data) => {
    try {
        if(data.firstLogin === 'N') await updateUser(conn, {id: data.id_user, 
                                                            name: data.name,
                                                            email: data.email,
                                                            cpf: data.cpf,
                                                            password: data.password,
                                                            admin: data.admin})
        const student = await conn.query(sql, [data.firstLogin, data.id])
        return {
            message: ` Estudante ${data.name ? (data.name + ' ') : ''}alterado com sucesso! `,
            data: student.rows
        }
    } catch (error) {
        throw error
    }
}