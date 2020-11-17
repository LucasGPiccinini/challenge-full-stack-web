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
            message: ` Student ${data.name ? (data.name + ' ') : ''} successfully deleted! `,
        }
    } catch (error) {
        throw error
    }
}