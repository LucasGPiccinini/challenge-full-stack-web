'use strict'

const {loadUser} = require('./loadUser')

const sql = `
INSERT INTO users_grupoa 
        (name, 
        email, 
        cpf,
        password,
        admin) 
        VALUES ($1, 
                $2, 
                $3,
                $4,
                $5)
RETURNING id         
`
module.exports.createUser = async(conn, data) => {
    try {
        let user = await loadUser(conn, data)
        if (user.data.id) throw new Error(`Usuário ${data.name}, já cadastrado no sistema!`)
        user = await conn.query(sql, [data.name, data.email, data.cpf, data.password, data.admin])
        return {
            message: ` Usuário ${data.name ? (data.name + ' ') : ''}criado com sucesso! `,
            data: user.rows[0]
        }
    } catch (error) {
        throw error
    }
}