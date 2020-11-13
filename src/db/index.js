const { Pool } = require('pg')
const config = require('config')

const dbConfig = config.get('db')

const createPoll = new Pool({
    host:dbConfig.host,
    user:dbConfig.user,
    password:dbConfig.password,
    database:dbConfig.database,
    port:dbConfig.port
})

module.exports = createPoll