const config = require('./knexfile')
const environment = process.env.NODE_ENV || 'development';
const connection = config[environment]
const knex = require('knex')(connection)


module.exports = knex