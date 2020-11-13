'use strict'

const md5 = require('md5')

const createToken = (user) => md5(user.id + new Date)

const decodeBase64 = (code) => Buffer.from(code, 'base64').toString('utf-8')

const extrectEmailAndPws = (code) => {
    const [email, password] = decodeBase64(code.split(' ')[1]).split(':')
    return {email:email, password:password}
}

const extrectToken = (code) => {
    return decodeBase64(code.split(' ')[1])
}

module.exports = {
    createToken,
    decodeBase64,
    extrectEmailAndPws,
    extrectToken
}