const sql = `
DELETE FROM users_grupoa
 WHERE id = $1
`
module.exports.deleteUser = async (conn, data) => {
    try {
        const user = await conn.query(sql, [data.id])
        return {
            message: ` Usuário ${data.name ? (data.name + ' ') : ''}excluído com sucesso! `,
            data: user.rows
        }
    } catch (error) {
        throw error
    }
}