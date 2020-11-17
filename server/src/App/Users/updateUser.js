'use strict'

const { loadUserByEmail } = require("./loadUserByEmail")

const sql = `
UPDATE users_grupoa
   SET name = $1,
       email = $2
 WHERE id = $3
`
module.exports.updateUser = async (conn, data) => {
    try {
        let user = await loadUserByEmail(conn, data.email)
        if (user.id && user.id != data.user_id) throw new Error(`Email ${data.email}, already exists!`)
        user = await conn.query(sql, [data.name, data.email, data.user_id])
        return {
            message: ` Usuário ${data.name ? (data.name + ' ') : ''}alterado com sucesso! `,
            data: user.rows
        }
    } catch (error) {
        throw error
    }
}