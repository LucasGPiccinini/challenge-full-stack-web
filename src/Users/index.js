'use strict'
const sql = require('./users.sql')

const createUser = async (conn, data) => {
    try {
        return await conn.query(sql.insert, [data.name, data.email, data.cpf])
        
    } catch (error) {
        throw new Error()
    }
}

const loadById = async (conn, data) => {
    try {
        const users = await conn.query(sql.loadById, [data.id])
        return users.rows ? users.rows : []
    } catch (error) {
        throw new Error
    }
}

const actions = {
    insert:createUser,
    load:loadById
}

module.exports = async (action, conn, data) =>{
    return await actions[action](conn, data)
}