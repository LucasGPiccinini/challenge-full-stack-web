'use strict'

const { deleteUser } = require("../Users/deleteUser")

const sql = `
DELETE FROM STUDENTS_GRUPOA
 WHERE id = $1
`
module.exports.deleteStudent = async (conn, data) => {
    try {
        await conn.query(sql, [data.id])
        await deleteUser(conn, {id:data.id_user})
        return {
            message: ` Estudante ${data.name ? (data.name + ' ') : ''}excluído com sucesso! `,
        }
    } catch (error) {
        throw error
    }
}