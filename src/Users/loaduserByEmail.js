'use strict'

'use strict'

const sql = `
SELECT *
  FROM users_grupoa
 WHERE email = $1
`
module.exports.loadUserByEmail = async (conn, email) => {
    try {

        const user = await conn.query(sql, [email])
        return  user.rows.length ? user.rows[0] : {}
        
    } catch (error) {
        throw error
    }
}