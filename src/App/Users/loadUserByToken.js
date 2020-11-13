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
        if(user.rows.length) return user.rows[0]
        throw new Error('Invalid Token!')
    } catch (error) {
        throw error
    }
}