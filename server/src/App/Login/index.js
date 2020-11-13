'use strict'
const { loadUserByEmail } = require('../Users/loadUserByEmail')
const { loadUserByToken } = require('../Users/loadUserByToken')
const { setToken } = require('../Users/setToken')
const { createToken } = require('../util/encoders')
const { extrectEmailAndPws, extrectToken } = require('../util/extractors')


const login = async(conn, data) => {

    try {
        const header = extrectEmailAndPws(data.authorization)
        if (!header.email) throw new Error('Invalid email!')
        let user = await loadUserByEmail(conn, header.email)
        if (!user) throw new Error('User not exist!')
        if (header.password != user.password)  throw new Error('Invalid password!')
        user.token = createToken(data)
        await setToken(conn, user)
        delete user.password
        return {
            messsage:` Welcome ${user.name}!`,
            data:user
        }
    } catch (error) {
        throw error
    }

}

const logout = async(conn, data) => {

    try {
        let user = await loadUserByToken(conn, extrectToken(data.authorization))
        if(!user) throw new Error('User is no longer logged in!')
        delete user.token
        return await setToken(conn, user)
    } catch (error) {
        throw error
    }

}

const actions = {
    in: login,
    out: logout
}

module.exports = async (action, conn, data) =>{
    try {
        return await actions[action](conn, data)
    } catch (error) {
        throw error
    }
}