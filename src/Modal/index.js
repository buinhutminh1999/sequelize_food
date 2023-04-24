const { Sequelize } = require('sequelize')
const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE, DB_PORT, DB_DIALECT } = require('../config/config')
const sequelize = new Sequelize(DB_DATABASE, DB_USER,DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
})
module.exports = sequelize