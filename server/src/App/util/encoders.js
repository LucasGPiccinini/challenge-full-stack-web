'use strict'
const md5 = require('md5')

const createToken = (user) => md5(user.id + new Date)

const decodeBase64 = (code) => Buffer.from(code, 'base64').toString('utf-8')

module.exports = {
    createToken,
    decodeBase64
}