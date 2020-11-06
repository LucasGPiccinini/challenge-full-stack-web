
'use strict'

const {isExists} = require('./isExists')

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
        let exists = await isExists(conn, data)
        if (exists.length) throw new Error(`Usuário ${data.name}, já cadastrado no sistema!`)
        const user =  await conn.query(sql, [data.name, data.email, data.cpf, data.password, data.admin])
        return {
            message: ` Usuário ${data.name ? (data.name + ' ') : ''}criado com sucesso! `,
            data: user.rows[0]
        }
    } catch (error) {
        throw error
    }
}