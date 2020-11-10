'use strict'

const { updateUser } = require("../Users/updateUser")

const sql = `
UPDATE STUDENTS_GRUPOA
   SET firstLogin = $1
 WHERE id = $2
 RETURNING *
`
module.exports.updateStudant = async (conn, data) => {
    try {
        if(data.firstLogin === 'N') await updateUser(conn, data)
        const studant = await conn.query(sql, [data.firstLogin, data.id])
        return {
            message: ` Estudante ${data.name ? (data.name + ' ') : ''}alterado com sucesso! `,
            data: studant.rows
        }
    } catch (error) {
        throw error
    }
}