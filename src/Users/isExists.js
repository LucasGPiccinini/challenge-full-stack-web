const sql = `
SELECT *
  FROM users_grupoa
 WHERE name = $1
   AND email = $2
   AND cpf = $3
`
module.exports.isExists = async (conn, data) => {
    try {
        const user = await conn.query(sql, [data.name, data.email, data.cpf])
        return user.rows
    } catch (error) {
        throw error
    }
}