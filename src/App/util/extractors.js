'use strict'

const { decodeBase64 } = require('./encoders')

const extrectEmailAndPws = (code) => {
    const [email, password] = decodeBase64(code.split(' ')[1]).split(':')
    return {email:email, password:password}
}

const extrectToken = (code) => {
    return decodeBase64(code.split(' ')[1])
}

module.exports = {
    extrectEmailAndPws,
    extrectToken
}