'use strict'

const { decodeBase64 } = require('./encoders')

const extrectEmailAndPws = (code) => {
    try {
        const [email, password] = decodeBase64(code.split(' ')[1]).split(':')
        return {email:email, password:password}
    } catch (error) {
        throw new Error('Inconsistent credentials!')
    }
}

const extrectToken = (code) => {
    return decodeBase64(code.split(' ')[1])
}

module.exports = {
    extrectEmailAndPws,
    extrectToken
}