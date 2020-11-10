'use strict'

const sql = `
UPDATE users_grupoa
   SET name = $1,
       email = $2,
       cpf = $3,
       password = $4,
       admin = $5
 WHERE id = $6
`
module.exports.updateUser = async (conn, data) => {
    try {
        const user = await conn.query(sql, [data.name, data.email, data.cpf, data.password, data.admin, data.id])
        return {
            message: ` Usuário ${data.name ? (data.name + ' ') : ''}alterado com sucesso! `,
            data: user.rows
        }
    } catch (error) {
        throw error
    }
}