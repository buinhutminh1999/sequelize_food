require('dotenv').config()
const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE, DB_PORT, DB_DIALECT } = process.env
module.exports = { DB_HOST, DB_USER, DB_PASS, DB_DATABASE, DB_PORT, DB_DIALECT }