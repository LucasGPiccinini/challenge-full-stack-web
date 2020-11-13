'use strict'

const sql = `
UPDATE users_grupoa
   SET token = $1
 WHERE id = $2
`
module.exports.setToken = async (conn, data) => {
    try {
        return await conn.query(sql, [data.token, data.id])
    } catch (error) {
        throw error
    }
}