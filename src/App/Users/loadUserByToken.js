'use strict'

'use strict'

const sql = `
SELECT *
  FROM users_grupoa
 WHERE token = $1
`
module.exports.loadUserByToken = async (conn, token) => {
    try {
        const user = await conn.query(sql, [token])
        return user.rows.length ? user.rows[0] : {}
    } catch (error) {
        throw error
    }
}