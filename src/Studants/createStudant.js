
'use strict'

const { createUser } = require('../Users/createUser')
const {isExists} = require('./isExists')

const sql = `
INSERT INTO students_grupoa 
        (id_user,
         studant_register) 
        VALUES ($1, 
                $2)
RETURNING *        
`
module.exports.createStudant = async(conn, data) => {
    try {
        let user = await isExists(conn, data)
        if (!user) user = await createUser(conn, data)
        const studant = await conn.query(sql, [user.id, data.studantRegister])
        return {
            message: ` Estudante ${data.name ? (data.name + ' ') : ''}criado com sucesso! `,
            data: studant.rows[0]
        }
    } catch (error) {
        throw error
    }
}