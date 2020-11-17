'use strict'

const { query } = require("../../db")
const { updateStudent } = require("../Students/updateStudent")

const sql = `
UPDATE users_grupoa
   SET password = $1
 WHERE id = $2
`
module.exports.savePassword = async (conn, data) => {
    try {
        if(data.firstLogin == 'Y') await updateStudent(conn, data)
        const user = await conn.query(sql, [data.password, data.id_user])
        return {
            message: ` Usuário ${data.name ? (data.name + ' ') : ''}alterado com sucesso! `,
            data: user.rows
        }
    } catch (error) {
        throw error
    }
}