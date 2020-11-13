const app = require('./server/src')
const config = require('config')

app(config.get('serverPort'))