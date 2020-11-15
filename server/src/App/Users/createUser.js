'use strict'

const {loadUserByEmail} = require('./loadUserByEmail')

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
        let user = await loadUserByEmail(conn, data.email)
        if (user.id) throw new Error(`User ${data.name}, already exists!`)
        user = await conn.query(sql, [data.name, data.email, data.cpf, data.password || null, data.admin || null])
        return {
            message: ` User ${data.name ? (data.name + ' ') : ''}successfully created! `,
            data: user.rows[0]
        }
    } catch (error) {
        throw error
    }
}