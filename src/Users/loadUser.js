'use strict'

const sql = `
SELECT *
  FROM users_grupoa
 WHERE name = $1
   AND email = $2
   AND cpf = $3
`
module.exports.loadUser = async (conn, data) => {
    try {
        const user = await conn.query(sql, [data.name, data.email, data.cpf])
        return {
            data: user.rows.length ? user.rows[0] : []
        }
    } catch (error) {
        throw error
    }
}